const Patient = require('../models/patientModel');
const {predictCancer} = require('../utils/cancerPredicton');
const addPatient = async (req, res) => {
    try{
        const {name,age,dob,gender,phone,email,cancer_type}=req.body;
        const {category,diagnosis_date}={
            category: predictCancer(cancer_type),
            diagnosis_date: new Date()
        }
        const patient = new Patient({
            name,
            age,
            dob,
            gender,
            phone,
            email,
            cancer_type,
            category,
            diagnosis_date
        });
        await patient.save();
        res.status(200).json({success: 'Patient added successfully', data: patient});
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal server error'+error });

    }
}
const getPatients = async (req, res) => {
    try{
        const patients = await Patient.find();
        res.status(200).json({patients});
    }
    catch(error){
        res.status(500).json({error: 'Internal server error'+error });

    }
}
const getPatientById = async (req, res) => {
    try{
        const patient = await Patient.findById(req.params.id);
        if(!patient){
            return res.status(404).json({error: 'Patient not found'});
        }
        res.status(200).json({patient});
    }
    catch(error){
        res.status(500).json({error: 'Internal server error'+error });
    }
}
module.exports = { addPatient, getPatients, getPatientById };