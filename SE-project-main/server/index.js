import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';
import viewgradesRoutes from './routes/viewgrades.js';
app.use('/viewGrades', viewgradesRoutes);


const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({limit: "20mb", extended:true }));
app.use(bodyParser.json({limit: "20mb", extended:true }));

app.use('/students', studentRoutes);
const CONNECTION_URL ="mongodb+srv://masters:12345@cluster0.pyg5u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser:true , useUnifiedTopology:true  
}).then(() => app.listen(PORT,()=>
console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err)=>console.log(err.messsage));


mongoose.set('useFindAndModify', false);