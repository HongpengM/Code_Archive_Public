'use strict'

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const neoTransactionSchema = new Schema({
    fromAddressInt: {type: Number, index: true},
    toAddressInt: {type: Number, index: true},
    fromAddress: {type:String},
    toAddress: {type:String},
    transactionNeoValue: {type: Number},
    transactionNeoGasValue: {type: Number},
    transactionId: {type:String},
    transactionTime: {type: Date},
    blockheight: {type: Number},
    blockhash: {type: String}
  })
  return mongoose.model('NeoTransaction', neoTransactionSchema)
}
