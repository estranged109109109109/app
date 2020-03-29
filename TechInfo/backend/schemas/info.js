const mongoose = require('mongoose');

const { Schema } = mongoose;
const mappingSchema = new Schema({

}, {collection: 'techinfo'});
module.exports = mongoose.model('Info', mappingSchema);
