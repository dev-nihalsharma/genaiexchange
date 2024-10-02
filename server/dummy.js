require('dotenv').config(); // Load environment variables from a .env file
const mongoose = require('mongoose');
const Patient = require('./models/patientModel'); // Adjust the path as necessary

// Sample patients data
const patients = [
    {
        name: "John Doe",
        age: 50,
        dob: new Date("1974-05-20"),
        gender: "male",
        phone: "1234567890",
        email: "john.doe@example.com", // Add a valid email
        cancer_type: "LUNG CANCER",
        category: "critical", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-23"),
        treatment_plan: "Chemotherapy" // Add a treatment plan
    },
    {
        name: "Jane Smith",
        age: 45,
        dob: new Date("1979-03-12"),
        gender: "female",
        phone: "0987654321",
        email: "jane.smith@example.com", // Add a valid email
        cancer_type: "BREAST CANCER",
        category: "benign", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-24"),
        treatment_plan: "Surgery" // Add a treatment plan
    },
    {
        name: "Emily Johnson",
        age: 30,
        dob: new Date("1994-07-18"),
        gender: "female",
        phone: "1231231234",
        email: "emily.johnson@example.com", // Add a valid email
        cancer_type: "COLON CANCER",
        category: "normal", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-24"),
        treatment_plan: "Radiation therapy" // Add a treatment plan
    },
    {
        name: "Michael Brown",
        age: 55,
        dob: new Date("1969-11-30"),
        gender: "male",
        phone: "3213213210",
        email: "michael.brown@example.com", // Add a valid email
        cancer_type: "BRAIN CANCER",
        category: "critical", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-26"),
        treatment_plan: "Chemotherapy" // Add a treatment plan
    },
    {
        name: "Sarah Davis",
        age: 40,
        dob: new Date("1984-04-22"),
        gender: "female",
        phone: "5555555555",
        email: "sarah.davis@example.com", // Add a valid email
        cancer_type: "LUNG CANCER",
        category: "benign", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-27"),
        treatment_plan: "Surgery" // Add a treatment plan
    },
    {
        name: "Robert Wilson",
        age: 60,
        dob: new Date("1964-09-15"),
        gender: "male",
        phone: "6666666666",
        email: "robert.wilson@example.com", // Add a valid email
        cancer_type: "COLON CANCER",
        category: "normal", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-29"),
        treatment_plan: "Radiation therapy" // Add a treatment plan
    },
    {
        name: "Jessica Taylor",
        age: 35,
        dob: new Date("1989-02-01"),
        gender: "female",
        phone: "7777777777",
        email: "jessica.taylor@example.com", // Add a valid email
        cancer_type: "BREAST CANCER",
        category: "critical", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-27"),
        treatment_plan: "Chemotherapy" // Add a treatment plan
    },
    {
        name: "Daniel Martinez",
        age: 29,
        dob: new Date("1995-12-30"),
        gender: "male",
        phone: "8888888888",
        email: "daniel.martinez@example.com", // Add a valid email
        cancer_type: "LUNG CANCER",
        category: "normal", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-25"),
        treatment_plan: "Surgery" // Add a treatment plan
    },
    {
        name: "Laura Garcia",
        age: 48,
        dob: new Date("1976-06-15"),
        gender: "female",
        phone: "9999999999",
        email: "laura.garcia@example.com", // Add a valid email
        cancer_type: "COLON CANCER",
        category: "benign", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-30"),
        treatment_plan: "Radiation therapy" // Add a treatment plan
    },
    {
        name: "David Rodriguez",
        age: 62,
        dob: new Date("1962-08-01"),
        gender: "male",
        phone: "0000000001",
        email: "david.rodriguez@example.com", // Add a valid email
        cancer_type: "BRAIN CANCER",
        category: "critical", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-23"),
        treatment_plan: "Chemotherapy" // Add a treatment plan
    },
    {
        name: "Megan Lopez",
        age: 53,
        dob: new Date("1971-11-21"),
        gender: "female",
        phone: "2222222222",
        email: "megan.lopez@example.com", // Add a valid email
        cancer_type: "BREAST CANCER",
        category: "normal", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-30"),
        treatment_plan: "Surgery" // Add a treatment plan
    },
    {
        name: "Kevin Lee",
        age: 41,
        dob: new Date("1983-03-10"),
        gender: "male",
        phone: "3333333333",
        email: "kevin.lee@example.com", // Add a valid email
        cancer_type: "LUNG CANCER",
        category: "benign", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-28"),
        treatment_plan: "Radiation therapy" // Add a treatment plan
    },
    {
        name: "Angela White",
        age: 34,
        dob: new Date("1990-04-20"),
        gender: "female",
        phone: "4444444444",
        email: "angela.white@example.com", // Add a valid email
        cancer_type: "COLON CANCER",
        category: "normal", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-24"),
        treatment_plan: "Chemotherapy" // Add a treatment plan
    },
    {
        name: "Mark Harris",
        age: 57,
        dob: new Date("1967-10-05"),
        gender: "male",
        phone: "5555555555",
        email: "mark.harris@example.com", // Add a valid email
        cancer_type: "BRAIN CANCER",
        category: "critical", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-21"),
        treatment_plan: "Chemotherapy" // Add a treatment plan
    },
    {
        name: "Samantha Clark",
        age: 27,
        dob: new Date("1997-08-30"),
        gender: "female",
        phone: "6666666666",
        email: "samantha.clark@example.com", // Add a valid email
        cancer_type: "BREAST CANCER",
        category: "benign", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-19"),
        treatment_plan: "Surgery" // Add a treatment plan
    },
    {
        name: "Daniela Robinson",
        age: 39,
        dob: new Date("1985-02-12"),
        gender: "female",
        phone: "7777777777",
        email: "daniela.robinson@example.com", // Add a valid email
        cancer_type: "LUNG CANCER",
        category: "critical", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-18"),
        treatment_plan: "Chemotherapy" // Add a treatment plan
    },
    {
        name: "Brian Hall",
        age: 42,
        dob: new Date("1982-01-05"),
        gender: "male",
        phone: "8888888888",
        email: "brian.hall@example.com", // Add a valid email
        cancer_type: "COLON CANCER",
        category: "normal", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-24"),
        treatment_plan: "Radiation therapy" // Add a treatment plan
    },
    {
        name: "Cynthia King",
        age: 33,
        dob: new Date("1991-12-17"),
        gender: "female",
        phone: "9999999999",
        email: "cynthia.king@example.com", // Add a valid email
        cancer_type: "BREAST CANCER",
        category: "benign", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-22"),
        treatment_plan: "Surgery" // Add a treatment plan
    },
    {
        name: "Jason Scott",
        age: 44,
        dob: new Date("1980-07-14"),
        gender: "male",
        phone: "1111111111",
        email: "jason.scott@example.com", // Add a valid email
        cancer_type: "LUNG CANCER",
        category: "critical", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-20"),
        treatment_plan: "Chemotherapy" // Add a treatment plan
    },
    {
        name: "Elizabeth Young",
        age: 51,
        dob: new Date("1973-05-27"),
        gender: "female",
        phone: "2222222222",
        email: "elizabeth.young@example.com", // Add a valid email
        cancer_type: "COLON CANCER",
        category: "normal", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-21"),
        treatment_plan: "Radiation therapy" // Add a treatment plan
    },
    {
        name: "Steven Adams",
        age: 38,
        dob: new Date("1986-09-11"),
        gender: "male",
        phone: "3333333333",
        email: "steven.adams@example.com", // Add a valid email
        cancer_type: "BRAIN CANCER",
        category: "benign", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-16"),
        treatment_plan: "Chemotherapy" // Add a treatment plan
    },
    {
        name: "Patricia Baker",
        age: 29,
        dob: new Date("1995-10-30"),
        gender: "female",
        phone: "4444444444",
        email: "patricia.baker@example.com", // Add a valid email
        cancer_type: "BREAST CANCER",
        category: "critical", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-19"),
        treatment_plan: "Surgery" // Add a treatment plan
    },
    {
        name: "Gary Nelson",
        age: 59,
        dob: new Date("1965-06-12"),
        gender: "male",
        phone: "5555555555",
        email: "gary.nelson@example.com", // Add a valid email
        cancer_type: "LUNG CANCER",
        category: "normal", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-17"),
        treatment_plan: "Radiation therapy" // Add a treatment plan
    },
    {
        name: "Anna Carter",
        age: 36,
        dob: new Date("1988-03-29"),
        gender: "female",
        phone: "6666666666",
        email: "anna.carter@example.com", // Add a valid email
        cancer_type: "COLON CANCER",
        category: "benign", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-15"),
        treatment_plan: "Chemotherapy" // Add a treatment plan
    },
    {
        name: "Kevin Thomas",
        age: 64,
        dob: new Date("1960-02-25"),
        gender: "male",
        phone: "7777777777",
        email: "kevin.thomas@example.com", // Add a valid email
        cancer_type: "BRAIN CANCER",
        category: "critical", // Use "category" instead of "stage"
        diagnosis_date: new Date("2024-09-30"),
        treatment_plan: "Chemotherapy" // Add a treatment plan
    }
];

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected...');

        // Insert patients data
        for (const patientData of patients) {
            const patient = new Patient(patientData);
            try {
                await patient.save();
                console.log('Patient data saved:', patient);
            } catch (err) {
                console.error('Error saving patient data:', err);
            }
        }
        mongoose.connection.close(); // Close the connection after saving
    })
    .catch(err => console.error('MongoDB connection error:', err));