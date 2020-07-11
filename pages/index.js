import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Home = () => {
  const [content,setContent]=useState('')
  const[name,setName]=useState('')
  const [notes,setNotes]=useState([])

  useEffect(()=>{
    axios.get('/api/test').then(initialNotes=>{
    setNotes(initialNotes.data)

   })
  },[])

  const remove=(_id)=>{
    
    axios.delete(`/api/test?_id=${_id}`,_id)
    console.log("id is "+_id)
    setNotes(notes.filter(note=>note._id!==_id))
  }
  const publish=async()=>{
     const note={
       content:content,
       by:name,
     }
  const body=await axios.post('/api/test',note)
  setNotes(notes.concat(body.data))
    }

   
    console.log(notes)
  return(
    <div>
   <input type='text' placeholder="Note" onChange={(e)=>setContent(e.target.value)}/>
   <input type='text' placeholder="Author" onChange={(e)=>setName(e.target.value)}/>
   <button onClick={publish} >Publish</button>
   <hr/>
       <div>
         <table border='3px'>
           <tr><td><b>TODO</b></td><td><b>Author</b></td><td><b>Action</b></td></tr>
       {notes.map(note=>{
         return(
           <tr>
          <td>{note.content}</td>
          <td>{note.by}</td>
          <td><button onClick={()=>remove(note._id)}>Done</button></td>
          </tr>
          )
       })} 
       </table>
     </div>
     
   
    <style jsx>
      {`
      h3{
        color:black;
      }

    
    `}
    </style>

    <style jsx global>{`
      
      
    `}</style>
  </div>
)
  }
export default Home
