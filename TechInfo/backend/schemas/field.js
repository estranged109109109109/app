const mongoose = require('mongoose');

const { Schema } = mongoose;
const mappingSchema = new Schema({

}, {collection: 'fieldinfo'});
module.exports = mongoose.model('Field', mappingSchema);
