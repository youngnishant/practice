import mongoose from 'mongoose'

const noteSchema=new mongoose.Schema({
    content:{type:String},
    by:{type:String}
})
module.exports=mongoose.models.notes || mongoose.model('notes', noteSchema);
