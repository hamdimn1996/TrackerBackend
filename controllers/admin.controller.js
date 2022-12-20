const admin = require('../models/admin')
const jwt = require('jsonwebtoken')

exports.createAdmin = async (req, res) => {
    try {
        await admin.create(req.body)
        res.send({ message: 'created successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message || 'error server' })
    }
}

exports.adminLogin = async (req, res) => {
    try {
        const adminFound = await admin.findOne({ email: req.body.email })
        if (adminFound) {
            if (adminFound.password == req.body.password) {
                let payload = {
                    adminId: adminFound._id,
                    adminEmail: adminFound.email
                }
                const token = jwt.sign(payload, 'secret', { expiresIn: '1d' })
                res.send({ message: 'Logged in', token: token })
            } else {
                res.status(400).send({ message: 'Please check your email or password' })
            }
        } else {
            res.status(400).send({ message: 'Please check your email or password' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message || 'error server' })
    }
}

exports.logout = (req, res)=> {
    req.logout((err) => {
        if (err) {
            return next(err)
        }
        res.json({ message: "Vous êtes déconnecté avec succès." })
    }); 
}