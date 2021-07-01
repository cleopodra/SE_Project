import StudentData from '../models/student.js'; 

export const getStudent= async (req,res) => {
    try {
        const allStudents= await StudentData.find(); 

        res.status(200).json(allStudents); 
    } catch (error) {
        res.status(404).json({message: error.message}); 
    }
}

export const createStudent= async (req,res) => {
    const student= req.body; 

    const newStudent = new StudentData(student); 

    try {
        await newStudent.save(); 
        res.status(201).json(); 
    
    } catch (error) {
        res.status(409).json({message: error.message}) ; 
    }

} 

export const deleteStudent= async (req,res) => {
    const id= req.params.id; 


    try {
       await StudentData.findByIdAndRemove(id).exec(); 
       res.send('Successfully deleted!')
    
    } catch (error) {
        console.log(error); 
        
    }

}

export const updateStudent = async (req, res) => {
    const id = req.params.id;
    const student= req.body;

    try {
        console.log(student);
        await StudentData.findByIdAndUpdate(id, student).exec();
        res.send('Updated successfully')
    } catch(error) {
        console.log(error);
    }
}