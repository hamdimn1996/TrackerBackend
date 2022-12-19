const ProjectManager = require('../models/projectManager');

exports.getAllProjectManagers = async (req, res) => {
    try {
        const projectManager = await ProjectManager.find({})
        res.send(projectManager)
    } catch (error) {
        res.status(500).send({ message: error.message || 'Server error!' })
    }
}

exports.getProjectManagerById = async (req, res) => {
    try {
        const projectManager = await ProjectManager.findById(req.params.id)
        res.send(projectManager)
    } catch (error) {
        res.status(500).send({ message: 'Server error!' })
    }
}

exports.createProjectManager = async (req, res) => {
    try {
        const projectManagerFound = await ProjectManager.findOne({ email: req.body.email });
        if (projectManagerFound) {
            res.status(400).send({ message: 'ProjectManager already exist!' })
        } else {
            await ProjectManager.create(req.body);
            res.send({ message: 'ProjectManager registered successfully!' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Server error!' })
    }
}

exports.updateProjectManager = async (req, res) => {
    try {
        await ProjectManager.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: 'ProjectManager updated successfully!' });
    } catch (error) {
        res.status(500).send({ message: 'Server error!' })
    }
}

exports.deleteProjectManager = async (req, res) => {
    try {
        await ProjectManager.findByIdAndRemove(req.params.id)
        res.send({ message: 'ProjectManager deleted successfully!' })
    } catch (error) {
        res.status(500).send({ message: 'Server error!' })
    }
}