import  express from 'express'
import { getGrade } from '../controllers/viewGrades.js';
import viewGrades from '../models/viewGrades.js';

const router = express.Router();

router.get('/', getGrade);



export default router;