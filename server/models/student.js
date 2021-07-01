import mongoose from 'mongoose'; 

const studentSchema = mongoose.Schema({
    CourseName: String,
    Subject1: String,
    Subject2: String,
    Subject3:String,
    Subject4:String,
    Subject5:String,
    Subject6:String,
}); 

const student= mongoose.model('student', studentSchema);
export default student;