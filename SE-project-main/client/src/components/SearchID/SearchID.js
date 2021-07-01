import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'; 

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SearchID() {
  const classes = useStyles();

  
  const [student, setStudent]= useState({
      IdNo: '', 
      }); 

   const createStudent = () => {
     console.log(student)
       axios.post('http://localhost:5000/students', student).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Search by ID</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Id number" variant="outlined" value = {student.IdNo} onChange= {(event) => {
          setStudent({ ...student, IdNo :event.target.value}) 
          }}/>
      
      <Button variant="contained" color="primary" onClick ={createStudent}> 
        Search 
      </Button>
    </form>
    </>
  );
}