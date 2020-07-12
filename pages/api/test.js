import connect from '../../database/connect'
connect()
 const Notes=require('../../database/models/notes')
  
  module.exports= async(req, res) => {
    switch(req.method)  {
        
        case "GET": 
        const allNotes=await Notes.find()
        res.status(200).json(allNotes)
        break;

        case "POST":
            const {content} =req.body
            const note=new Notes({
                content
            })
            const savedNote= await note.save()
            res.json(savedNote)
            break;
        case "DELETE":
            const {_id}=req.query
            await Notes.findByIdAndDelete(_id)
            res.json([{msg:'Deleted'}])
            

    }


    /*let note=new Notes({
        content:"hi there , this is test",
        by:"Nishant"
    })*/
    
  }