import  express, { request }  from 'express'
import { getStudent, createStudent, deleteStudent, updateStudent } from '../controllers/student.js';
import student from '../models/student.js';

const router = express.Router();

router.get('/', getStudent);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);
router.put('/:id', updateStudent)

export default router;