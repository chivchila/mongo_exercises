var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text:  {// text is an object
        type: String,
        required: true,// value has to exist
        minlength: 5, 
        trim: true // not to allow empty stings
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,    //regular old unix timestamp 
        default: null
    }
});

module.exports = {Todo}