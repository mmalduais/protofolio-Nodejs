const mongoose = require('mongoose');
const skillsSchema = new mongoose.Schema({

    skillName:{
        type:String,
        required: true
    },
    skillRange:{
        type:String,
        required: true
    },
    state: {
        type:Number,
        default:1
    }
    
});

module.exports = mongoose.model('Skills', skillsSchema  );