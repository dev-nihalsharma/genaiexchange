const upload = require('../utils/multerConfig');
const express = require('express');
const router = express.Router();
const { getPatients, addPatient, getPatientById} = require('../controllers/patientController');
router.get('/', getPatients);
router.post('/', upload.single('report'), addPatient);
router.get('/:id', getPatientById);
module.exports = router;