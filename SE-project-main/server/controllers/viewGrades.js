import gradeData from '../models/viewGrades.js'; 

export const getGrade= async (req,res) => {
    try {
        const allStudentGrades= await gradeData.find(); 

        res.status(200).json(allStudentGrades); 
    } catch (error) {
        res.status(404).json({message: error.message}); 
    }
}

export const displayGrades= async (req,res) => {
    const student= req.body; 

    const newStudent = new gradeData(student); 

    try {
        await newStudent.save(); 
        res.status(201).json(newStudent); 
    
    } catch (error) {
        res.status(409).json({message: error.message}) ; 
    }

} 

