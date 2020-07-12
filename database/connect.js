import mongoose, { connect } from 'mongoose'
const uri=process.env.MONGODB_URI || "mongodb+srv://abc:gettingGood@cluster0-lfanp.mongodb.net/test?retryWrites=true&w=majority"
export default function (){
  console.log("connect:"+mongoose.connection.readyState)
if(!mongoose.connection.readyState){
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
         useUnifiedTopology: true 
      }
      );
      console.log("connect2:"+mongoose.connection.readyState)

    }
    else {
      console.log("connect3:"+mongoose.connection.readyState)

      return
    }
}
    