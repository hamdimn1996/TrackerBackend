const admin = require('../models/admin')

exports.createAdmin = async (req,res) => { 
    try {
        await admin.create(req.body)
        res.send({message:'created successfully'})
    } catch (error) {
        res.status(500).json({message:error.message || 'error server'})
    }
}