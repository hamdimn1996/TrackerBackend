const express = require('express')
const { createAdmin, adminLogin, logout } = require('../controllers/admin.controller')
const router = express.Router()

router.post('/createAdmin', createAdmin);
router.post('/login', adminLogin);
router.post('/logout', logout);

module.exports = router