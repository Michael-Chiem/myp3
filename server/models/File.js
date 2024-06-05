const mongoose = require('mongoose');

const { Schema } = mongoose;



const fileSchema = new Schema({
  filename: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  encoding: {
    type: String,
    required: true,
  },
 
});




const File = mongoose.model('File', fileSchema);

module.exports = File;
