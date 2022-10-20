const neoConstant = {
  network: {
    testnet: 'testnet',
    mainnet: 'mainnet',
  },
  rpc: {
    getblock: 'getblock',
    getblockcount: 'getblockcount',
    getversion: 'getversion',
    getrawtransaction: 'getrawtransaction',
  },
  transaction: {
    MinerTransaction: 'MinerTransaction',
    ContractTransaction: 'ContractTransaction',
    InvocationTransaction: 'InvocationTransaction',
    ClaimTransaction: 'ClaimTransaction',
  },
  assetType: {
    neo: '0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
    neoGas: '0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7'
  }
}

module.exports= {
  neoConstant: neoConstant
}
