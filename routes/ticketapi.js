const express = require('express');
const passport = require('passport');
const { createTicket, getAllTickets, getTicketById, updateTicket, deleteTicket, getProjectsForTicket } = require('../controllers/ticket.controller');
const router = express.Router()

router.post('/ticket',passport.authenticate("bearer", { session: false }), createTicket);
router.get('/ticket',passport.authenticate("bearer", { session: false }), getAllTickets);
router.get('/ticket/:id',passport.authenticate("bearer", { session: false }), getTicketById);
router.put('/ticket/:id',passport.authenticate("bearer", { session: false }), updateTicket);
router.delete('/ticket/:id',passport.authenticate("bearer", { session: false }), deleteTicket);
router.get('/getProjectsForTicket',passport.authenticate("bearer", { session: false }), getProjectsForTicket);

module.exports = router