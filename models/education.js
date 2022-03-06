const mongoose = require('mongoose');
const EduSchema = new mongoose.Schema({

    Ledu:{
        type:String,
        required: true
    },
    gedu:{
        type:String,
        required: true
    },
    cedu:{
        type:String,
        required: true
    }
    
});

module.exports = mongoose.model('EduSchema', EduSchema  );