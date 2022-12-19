const Collaborator = require('../models/collaborator');

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
        const collaboratorFound = await Collaborator.findOne({ email: req.body.email });
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
        await Collaborator.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: 'Collaborator updated successfully!' });
    } catch (error) {
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