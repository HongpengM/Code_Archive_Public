/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1563618083585_5325';

  // add your middleware config here
  config.middleware = [];

  config.mongoose = {
    // clientId, access the client instance by app.mongooseDB.get('clientId')
    //url: 'mongodb+srv://user001:753951@beijingblock-gzzbr.azure.mongodb.net/Beijing?retryWrites=true',
    url: 'mongodb://127.0.0.1:27017/blockChains',
    options: {},
    
  };

  config.security= {
    csrf: {
      enable: false,
    },
  };
  
  return config;
};
