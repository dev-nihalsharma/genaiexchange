const express = require('express');
const router = express.Router();
const { getCategories, getRecent } = require('../controllers/dataController');
router.get('/recent', getRecent);
router.get('/categories', getCategories);
module.exports = router;