const mongoose = require('mongoose');
const photo = new mongoose.Schema({

    image:{
        type:String,
        required: true
    },
    cv:{
        type:String,
        required: true
    }
    
});

module.exports = mongoose.model('photos', photo  );