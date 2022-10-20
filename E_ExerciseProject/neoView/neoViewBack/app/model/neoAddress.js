'use strict'


module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const neoAddresSchema = new Schema({
    neoAddress: {type: String, index:true},
    neoAddressInt: {type: Number, index:true}
  })
  return mongoose.model('NeoAddress', neoAddresSchema);
};

