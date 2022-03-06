const mongoose = require('mongoose');
const expSchema = new mongoose.Schema({
    expName:{
        type:String,
        required: true
    },
    companyName:{
        type:String,
        required: true
    },
    expDesc:{
        type:String,
        required: true
    },
    state: {
        type:Number,
        default:1
    }
    
    
});

module.exports = mongoose.model('Experience',expSchema  );