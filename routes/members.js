var express = require('express');
var router = express.Router();
var HomepageController = require('../controllers/homepage');
var Member = require('../models/member');

router.get('/drivers', HomepageController.DriverList(Member));
router.get('/guests', HomepageController.GuestList(Member));
router.post('/createMember', HomepageController.CreateMember(Member));
router.post('/deleteMember', HomepageController.DeleteMember(Member));

module.exports = router;
