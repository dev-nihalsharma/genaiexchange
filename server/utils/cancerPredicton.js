const multer = require('multer');
const path = require('path');
const fs = require('fs');

function predictCancer(cancer_type) {
    return ["normal","benign","critical"][Math.floor(Math.random() * 3)];
}

module.exports = { predictCancer };