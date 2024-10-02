const Patient = require('../models/patientModel');

const getCategories = async (req, res) => {
    try{
        const aggregate = await Patient.aggregate([
            {
                $group: {
                    _id: "$category",
                    count: { $sum: 1 }
                }
            },
            {
                $addFields: {
                    category: "$_id"
                }
            },
            {
                $project: {
                    _id: 0,
                    category: 1,
                    count: 1
                }
            }
        ]);

        res.status(200).json({data: aggregate});
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal server error'+error });
    }
}

const getRecent = async (req, res) => {
    try{
        const recents = await Patient.aggregate([
            {
                $match: {
                    diagnosis_date: {
                        $gte: new Date(new Date().setDate(new Date().getDate() - 9))
                    }
                }
            },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$diagnosis_date" } },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { _id: 1 }
            },
            {
                $project: {
                    _id: 0,
                    date: "$_id",
                    count: 1
                }
            }
        ]);
        res.status(200).json({data: recents});
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal server error'+error });
    }
}
module.exports = { getCategories, getRecent };