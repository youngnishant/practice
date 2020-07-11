import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Head from 'next/head'
import AppBar from './component/appBar'
import {Table,Button,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
  
});
const Home = () => {
  const [content,setContent]=useState('')
  const[name,setName]=useState('Nishant')
  const [notes,setNotes]=useState([])
  const classes = useStyles();

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
       <AppBar/>
<Head>
      <title>My First Serverless app</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      </Head>


       <div>
       <TableContainer component={Paper}>
       <Table className={classes.table} aria-label="simple table">
       <TableHead>
       <TableRow> 
         <TableCell align="center">TODO</TableCell>
        <TableCell align="center">Author</TableCell>
        <TableCell align="center">Action</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>

       {notes.map(note=>{
         return(
          <TableRow key={note._id}>
          <TableCell align="center">{note.content}</TableCell>
          <TableCell align="center">{note.by}</TableCell>
          <TableCell align="center"><button className="delete"onClick={()=>remove(note._id)}>Done</button></TableCell>
          </TableRow>


          
          )
       })} 
</TableBody>
      </Table>
    </TableContainer>    

    <TextField  label="Write Here...."
    id="filled-basic"autoFocus='true'fullWidth="true"
     onChange={(e)=>setContent(e.target.value)}
      style={{position:"fixed",bottom:0,maxWidth:300,width:'600px',margin:'0 0 10px 10px',color:'black',backgroundColor:'white'}}/>


    <Button variant="contained"
    color="primary"
    onClick={publish}
    className={classes.button}
    endIcon={<Icon>send</Icon>}
    style={{position:"fixed",bottom:0,right:0,margin:'0 2px 10px 10px'}}>
      Send</Button>

     </div>

   
    <style jsx>
      {`

      

    
    `}
    </style>

    <style jsx global>{`
      *{
        margin:0;
        padding:0;
      }
      
    `}</style>
  </div>
)
  }
export default Home
