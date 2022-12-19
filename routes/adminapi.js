const express = require('express')
const { createAdmin } = require('../controllers/admin.controller')
const router = express.Router()

router.post('/createAdmin', createAdmin);

module.exports = router