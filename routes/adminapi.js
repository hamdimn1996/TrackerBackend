const express = require('express')
const { createAdmin, adminLogin } = require('../controllers/admin.controller')
const router = express.Router()

router.post('/createAdmin', createAdmin);
router.post('/login', adminLogin);

module.exports = router