
'use strict';
const axios = require('axios')

const { neoConstant } = require('./common.js')
const Service = require('egg').Service

const { range,
	rangeArr,
	filterVoutByN,
	sleep} = require('./utils.js')

class syncService extends Service {


  // Neo //////////////////////////////////////////////////////////////////////
  async syncNeo() {

    return
  }

  // Sync Neo Blocks From #start To #end
  // Store it in MongoDB, update mongoDB blocks info,
  // and update address charts
  async syncNeoByRange(blockStart, blockEnd) {


    let blockIdArrs = rangeArr(parseInt(blockStart), parseInt(blockEnd), 10)
    console.log(blockIdArrs)
    for (let i_ = 0; i_ < blockIdArrs.length; i_++){
      let blockIdArr = range(blockIdArrs[i_][0], blockIdArrs[i_][1])
      let transactionPair = []
      for (let i = 0; i < blockIdArr.length; i++){
	let blockId = blockIdArr[i]
	let blockData = await axios.post('https://rpc3.ilink.network:8443', {
	  jsonrpc: "2.0",
	  method: "getblock",
	  params: [blockId,1],
	  id: 1
	})
	let resData = undefined
	if (parseInt(blockData.status) >= 200 && parseInt(blockData.status) < 300){
	  resData = blockData.data.result
	}
	
	let blockD = resData

	let contractTransactions = []
	resData.tx.forEach(tx => {
	  if (tx.type === neoConstant.transaction.ContractTransaction){
	    contractTransactions.push({...tx,
				       blocktime:resData.time,
				       blockhash:resData.hash,
				       blockheight:resData.index})
	  }
	})
	
	// Get previous transactions (from Address)
	for (let i = 0; i < contractTransactions.length; i++){
	  let tx = contractTransactions[i]
	  let prevTxs = []
	  for (let i = 0; i < tx.vin.length; i++){
	    let prevTxRes = await axios.post('https://rpc3.ilink.network:8443', {
	      jsonrpc: "2.0",
	      method: "getrawtransaction",
	      params: [tx.vin[i].txid,1],
	      id: 1
	    })
	    let prevTx = undefined
	    if (parseInt(prevTxRes.status) >= 200 && parseInt(prevTxRes.status) < 300){
	      prevTx = prevTxRes.data.result
	    }
	    if (prevTx){
	      prevTxs.push(filterVoutByN(prevTx.vout, tx.vin[i].vout))
	    }
	  }

	  let prevTxsMap = prevTxs.map(record=>{
	    let newRec = {}
	    newRec.address = record.address
	    if (record.asset == neoConstant.assetType.neo){
	      newRec.neo = parseFloat(record.value)
	      newRec.neoGas = 0.0
	    } else {
	      newRec.neoGas = parseFloat(record.value)
	      newRec.neo = 0.0
	    }
	    return newRec
	  })
	  
	  let fromAddressFlow = {}
	  for (let i = 0; i < prevTxsMap.length; i++){
	    let address = prevTxsMap[i].address
	    if (!fromAddressFlow[address]){
	      fromAddressFlow[address]={
		neo: 0,
		neoGas: 0
	      }
	    }
	    fromAddressFlow[address].neo += prevTxsMap[i].neo
	    fromAddressFlow[address].neoGas += prevTxsMap[i].neoGas
	  }// end of from addressFlow
	  //if (tx.vin.length > 1){
	  //  console.log(prevTxsMap)
	  //  console.log('previous address Flow ',fromAddressFlow)
	  //  console.log(tx)
	  //}
	  
	  transactionPair.push({
	    from: fromAddressFlow,
	    tx: tx
	  })
	}
	//console.log(contractTransactions) 
      }
      
      console.log(transactionPair)
      let transactionPairMap = transactionPair.map(record=>{
	let newRec = {}
	
	newRec.from = []
	Object.keys(record.from).forEach(k=>{
	  newRec.from.push({
	    address: k,
	    flow: record.from[k]
	  })
	})
	newRec.to = {}
	newRec.to.txid = record.tx.txid
	newRec.to.vout = record.tx.vout
	newRec.to.blocktime = record.tx.blocktime
	newRec.to.blockheight = record.tx.blockheight
	newRec.to.blockhash = record.tx.blockhash
	return newRec
      })


      console.log(transactionPairMap)
      
      let neoInfo = await this.ctx.model.BlockDBInfo.findOne({
	blockDBType: 'neo'
      })
	  .exec();
      if (!neoInfo) {
	neoInfo = new this.ctx.model.BlockDBInfo()
	neoInfo.blockDBType = 'neo'
	neoInfo.blockDBMaxAddressInt = 0
	await neoInfo.save()
      }


      // Put data to MongoDB
      for (let i = 0; i < transactionPairMap.length; i++){
	let pair = transactionPairMap[i]
	for (let j = 0; j < pair.from.length; j++){
	  let from = pair.from[j]
	  let fromNeoAddress = await this.ctx.model.NeoAddress.findOne({
	    neoAddress: from.address,
	  }).
	      exec();
	  
	  if (!fromNeoAddress) {
	    fromNeoAddress = new this.ctx.model.NeoAddress();
	    fromNeoAddress.neoAddress = from.address
	    fromNeoAddress.neoAddressInt = neoInfo.blockDBMaxAddressInt;
	    neoInfo.blockDBMaxAddressInt += 1
	    await neoInfo.save()
	    await fromNeoAddress.save()
	  }
	  let toAddress = pair.to.vout.map(k=>k.address).filter(k=>{
	    return pair.from.map(l=>l.address).includes(k) ? false : true
	  })[0]

	  if(!toAddress) {
	    toAddress = fromNeoAddress.neoAddress
	  }
	  
	  let toNeoAddress = await this.ctx.model.NeoAddress.findOne({
	    neoAddress: toAddress
	  })
	  if(!toNeoAddress){
	    toNeoAddress = new this.ctx.model.NeoAddress();
	    toNeoAddress.neoAddress = toAddress
	    toNeoAddress.neoAddressInt = neoInfo.blockDBMaxAddressInt;
	    neoInfo.blockDBMaxAddressInt += 1
	    await neoInfo.save()
	    await toNeoAddress.save()
	  }
	  
	  let neoTransaction = await this.ctx.model.NeoTransaction.findOne({
	    fromAddressInt: fromNeoAddress.neoAddressInt,
	    toAddressInt: toNeoAddress.neoAddressInt,
	    transactionId: pair.to.txid
	  }).
	      exec();

	  if(!neoTransaction) {
	    neoTransaction = new this.ctx.model.NeoTransaction()
	    neoTransaction.fromAddressInt = fromNeoAddress.neoAddressInt
	    neoTransaction.fromAddress = fromNeoAddress.neoAddress
	    neoTransaction.toAddressInt = toNeoAddress.neoAddressInt
	    neoTransaction.toAddress = toNeoAddress.neoAddress
	    neoTransaction.transactionNeoValue = from.flow.neo
	    neoTransaction.transactionNeoGasValue = from.flow.neoGas
	    neoTransaction.transactionTime = new Date(pair.to.blocktime * 1000)
	    neoTransaction.blockheight = parseInt(pair.to.blockheight)
	    neoTransaction.blockhash = pair.to.blockhash
	    await neoTransaction.save()
	  }
	  
	}
      }
      await sleep(1000)
    }
    return true
  }
  
}

module.exports = syncService
