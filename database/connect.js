import mongoose, { connect } from 'mongoose'

export default function (){
  console.log("connect:"+mongoose.connection.readyState)
if(!mongoose.connection.readyState){
    mongoose.connect("mongodb+srv://abc:gettingGood@cluster0-lfanp.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
      );
      console.log("connect2:"+mongoose.connection.readyState)

    }
    else {
      console.log("connect3:"+mongoose.connection.readyState)

      return
    }
}
    