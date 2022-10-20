'use strict'

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const blockDBInfoSchema = new Schema({
    blockDBType: {type:String, index:true},
    blockDBMaxAddressInt: {type: Number}
  })

  return mongoose.model('BlockDBInfo', blockDBInfoSchema)
};

