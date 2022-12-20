const Project = require('../models/project');
const Utilisateurs = require('../models/utilisateurs');

exports.getAllProjects = async (req, res) => {
    try {
        const project = await Project.find({})
        res.send(project)
    } catch (error) {
        res.status(500).send({ message: error.message || 'Server error!' })
    }
}

exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate('colaboratorlist')
        res.send(project)
    } catch (error) {
        res.status(500).send({ message: 'Server error!' })
    }
}

exports.createProject = async (req, res) => {
    try {
        let newTab = []
        req.body.colaboratorlist.map((e) => {
            newTab.push(e.value)
        })
        req.body.colaboratorlist = newTab
        const project = await Project.create(req.body);
        await Project.findByIdAndUpdate(project._id,{projectownerid:req.user._id},{new:true})
        res.send({ message: 'Project registered successfully!' });

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Server error!' })
    }
}

exports.updateProject = async (req, res) => {
    try {
        let newTab = []
        req.body.colaboratorlist.map((e) => {
            newTab.push(e.value)
        })
        req.body.colaboratorlist = newTab
        await Project.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: 'Project updated successfully!' });
    } catch (error) {
        res.status(500).send({ message: 'Server error!' })
    }
}

exports.deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndRemove(req.params.id)
        res.send({ message: 'Project deleted successfully!' })
    } catch (error) {
        res.status(500).send({ message: 'Server error!' })
    }
}

exports.getResponsablesForProject = async (req, res) => {
    try {
        let newTable = []
        const resp = (await Utilisateurs.find()).filter((e)=> e.role==='Responsable projet').map(e=>{
            return newTable.push({label:`${e.nom} ${e.prenom}`,value:e._id})
        })
        
        res.send(newTable)
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Server error!' })
    }
}