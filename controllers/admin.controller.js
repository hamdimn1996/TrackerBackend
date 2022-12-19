const admin = require('../models/admin')

exports.createAdmin = async (req,res) => { 
    try {
        await admin.create(req.body)
        res.send({message:'created successfully'})
    } catch (error) {
        res.status(500).json({message:error.message || 'error server'})
    }
}

exports.adminLogin = async (req,res)=> { 
    try {
        const adminFound = await admin.findOne({email:req.body.email})
        if (adminFound) {
            if (adminFound.password == req.body.password) {
                res.send({message:'Logged in'})
            } else {
                res.status(400).send({message:'Please check your email or password'})
            }
        } else {
            res.status(400).send({message:'Please check your email or password'})
        }
    } catch (error) {
        res.status(500).json({message:error.message || 'error server'})
    }
}