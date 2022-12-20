const express = require('express');
const passport = require('passport');
const { createCollaborator, getAllCollaborators, getCollaboratorById, updateCollaborator, deleteCollaborator } = require('../controllers/collaborator.controller');
const router = express.Router()

router.post('/utilisateurs',passport.authenticate("bearer", { session: false }), createCollaborator);
router.get('/utilisateurs',passport.authenticate("bearer", { session: false }), getAllCollaborators);
router.get('/utilisateurs/:id',passport.authenticate("bearer", { session: false }), getCollaboratorById);
router.put('/utilisateurs/:id',passport.authenticate("bearer", { session: false }), updateCollaborator);
router.delete('/utilisateurs/:id',passport.authenticate("bearer", { session: false }), deleteCollaborator);

module.exports = router