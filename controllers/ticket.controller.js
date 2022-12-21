const Project = require('../models/project');
const Ticket = require('../models/ticket');

exports.getAllTickets = async (req, res) => {
    try {
        const ticket = await Ticket.find().populate('ownerId')
        res.send(ticket)
    } catch (error) {
        res.status(500).send({ message: error.message || 'Server error!' })
    }
}

exports.getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id)
        res.send(ticket)
    } catch (error) {
        res.status(500).send({ message: error.message || 'Server error!' })
    }
}

exports.createTicket = async (req, res) => {
    try {
        req.body.ownerId = req.user._id
        await Ticket.create(req.body);
        res.send({ message: 'Ticket registered successfully!' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Server error!' })
    }
}

exports.updateTicket = async (req, res) => {
    try {
        await Ticket.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: 'Ticket updated successfully!' });
    } catch (error) {
        res.status(500).send({ message: error.message || 'Server error!' })
    }
}

exports.deleteTicket = async (req, res) => {
    try {
        await Ticket.findByIdAndRemove(req.params.id)
        res.send({ message: 'Ticket deleted successfully!' })
    } catch (error) {
        res.status(500).send({ message: error.message || 'Server error!' })
    }
}

exports.getProjectsForTicket= async (req, res) => {
    try {
        let newTable = []
        const resp = await Project.find()
        resp.map((e)=>{
            return newTable.push({label:e.nomprojet,value:e._id})
        })
        
        res.send(newTable)
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Server error!' })
    }
}