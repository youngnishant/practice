import mongoose from 'mongoose'

export default function (){
if(!mongoose.connection.readyState){
    mongoose.connect("mongodb+srv://abc:gettingGood@cluster0-lfanp.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
    
    }else {return}
}
    