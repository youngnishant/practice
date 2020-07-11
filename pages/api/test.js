import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://abc:gettingGood@cluster0-lfanp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  let noteSchema=new mongoose.Schema({
      content:{type:String},
      by:{type:String}
  })
  const Notes=mongoose.models.notes || mongoose.model('notes', noteSchema);
  
  module.exports= async(req, res) => {
    switch(req.method)  {
        
        case "GET": 
        const allNotes=await Notes.find()
        res.status(200).json(allNotes)
        break;

        case "POST":
            const {content,by} =req.body
            const note=new Notes({
                content,by
            })
            note.save()
            res.json({"msg":"success"})

    }


    /*let note=new Notes({
        content:"hi there , this is test",
        by:"Nishant"
    })*/
    
  }