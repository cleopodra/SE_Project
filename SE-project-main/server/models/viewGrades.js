import mongoose from 'mongoose'; 

const GradeSchema = mongoose.Schema({
    IdNo: Number,
    courseName:[String],
    courseGrade:[String], 
}); 

const viewGrades= mongoose.model('viewGrades', GradeSchema);
export default viewGrades;