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

export default function CreateStudent() {
  const classes = useStyles();

  
  const [student, setStudent]= useState({
      CourseName:'',
      Subject1:'',
      Subject2:'',
      Subject3:'',
      Subject4:'',
      Subject5:'',
      Subject6:'',

      }); 

   const createStudent = () => {
     console.log(student)
       axios.post('http://localhost:5000/courses', student).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Create Schedule</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Course Name" variant="outlined" value = {student.CourseName} onChange= {(event) => {
          setStudent({ ...student, CourseName :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Subject 1" variant="outlined" value = {student.Subject1} onChange= {(event) => {
          setStudent({ ...student, Subject1 :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Subject 2" variant="outlined" value = {student.Subject2} onChange= {(event) => {
          setStudent({ ...student, Subject2 :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Subject 3" variant="outlined" value = {student.Subject3} onChange= {(event) => {
          setStudent({ ...student, Subject3 :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Subject 4" variant="outlined" value = {student.Subject4} onChange= {(event) => {
          setStudent({ ...student, Subject4 :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Subject 5" variant="outlined" value = {student.Subject5} onChange= {(event) => {
          setStudent({ ...student, Subject5 :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Subject 6" variant="outlined" value = {student.Subject6} onChange= {(event) => {
          setStudent({ ...student, Subject6 :event.target.value}) 
          }}/>
      <Button variant="contained" color="primary" onClick ={createStudent}> 
        Create 
      </Button>
    </form>
    </>
  );
}