const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    providedImage:{
        type: String,
    },
    cancer_type:{
        type: String,
        required: true
    },
    category:{
        type: String,
    },
    diagnosis_date:{
        type: Date,
        required: true
    },
    treatment_plan:{
        type: String,
        required: false
    },
});
module.exports = mongoose.model('Patient', patientSchema);