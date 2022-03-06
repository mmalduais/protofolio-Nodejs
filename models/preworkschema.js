const mongoose = require('mongoose');
const preschema = new mongoose.Schema({

    npre:{
        type:String,
        required: true
    },
    imgpre:{
        type:String,
        required: true
    }
    
    
});

module.exports = mongoose.model('preschema', preschema  );