const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '13d' });
        delete admin.password;
        res.status(200).json({ token,data:admin, success: 'Login successful' });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error'+error });
    }
};
const adminRegister = async (req, res) => {
    try{
        const { name, email,password } = req.body;
        const admin = await Admin.findOne({ email });
        if (admin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ name, email, password: hashedPassword });
        await newAdmin.save();
        const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET, { expiresIn: '14d' });
        delete newAdmin.password;
        res.status(200).json({ success: 'Admin registered successfully', token,data:newAdmin });


    }
    catch(error){
        res.status(500).json({error: 'Internal server error'+error });
    }
};
module.exports = { adminLogin, adminRegister };