const dbConnect = require('./database/connection');
const express = require('express');
const app = express();
const patientRoute = require('./routes/patientRoute');
const authRoute = require('./routes/authRoute');
const dataRoute = require('./routes/dataRoute');
require('dotenv').config();
dbConnect();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/auth',authRoute)
app.use('/patients', patientRoute);
app.use('/data', dataRoute);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port '+process.env.PORT);
});
