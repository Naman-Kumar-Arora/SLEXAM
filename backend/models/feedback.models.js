const mongoose = require('mongoose');
const FeedbackSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    item_date:{
        type:Date,
        required:true
    },
    nameofs:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('ALiiiiiiii',FeedbackSchema);