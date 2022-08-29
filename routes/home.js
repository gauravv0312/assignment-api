const express = require('express')
const router = express.Router();
const {homePage} = require('../controller/homeController');
router.route('/').get(homePage);
module.exports= router;