const Collaborator = require('../models/utilisateurs');

exports.getAllCollaborators = async (req, res) => {
    try {
        const collaborator = await Collaborator.find({})
        res.send(collaborator)
    } catch (error) {
        res.status(500).send({ message: error.message || 'Server error!' })
    }
}

exports.getCollaboratorById = async (req, res) => {
    try {
        const collaborator = await Collaborator.findById(req.params.id)
        res.send(collaborator)
    } catch (error) {
        res.status(500).send({ message: 'Server error!' })
    }
}

exports.createCollaborator = async (req, res) => {
    try {
        const collaboratorFound = await Collaborator.findOne({ adress: req.body.adress });
        if (collaboratorFound) {
            res.status(400).send({ message: 'Collaborator already exist!' })
        } else {
            await Collaborator.create(req.body);
            res.send({ message: 'Collaborator registered successfully!' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Server error!' })
    }
}

exports.updateCollaborator = async (req, res) => {
    try {
        req.body.role = req.body.role.value
        await Collaborator.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: 'Collaborator updated successfully!' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Server error!' })
    }
}

exports.deleteCollaborator = async (req, res) => {
    try {
        await Collaborator.findByIdAndRemove(req.params.id)
        res.send({ message: 'Collaborator deleted successfully!' })
    } catch (error) {
        res.status(500).send({ message: 'Server error!' })
    }
}