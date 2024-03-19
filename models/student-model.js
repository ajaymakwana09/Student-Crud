const mongoose=require('mongoose');

const studentschema = new mongoose.Schema({
    fname:String,
    lname:String,
    number:Number,
    email:String,
    grid:Number

})

const studentmodel=mongoose.model('stdcollection',studentschema);

module.exports=studentmodel;