const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    required: true  
  },
  date: {
    type: Date,
    required: true
  },
  important: Boolean,
});

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

// Export this model as a module
module.exports = mongoose.model('Note', noteSchema);