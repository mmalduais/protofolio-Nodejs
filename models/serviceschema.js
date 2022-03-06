const mongoose = require('mongoose');
const serviceschema = new mongoose.Schema({
    servName:{
        type:String,
        required: true
    },
   
    servDesc:{
        type:String,
        required: true
    },
    state: {
        type:Number,
        default:1
    }
    
});

module.exports = mongoose.model('serviceshema',serviceschema  );