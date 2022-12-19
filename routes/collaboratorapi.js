const express = require('express');
const { createCollaborator, getAllCollaborators, getCollaboratorById, updateCollaborator, deleteCollaborator } = require('../controllers/collaborator.controller');
const router = express.Router()

router.post('/collaborator', createCollaborator);
router.get('/collaborator', getAllCollaborators);
router.get('/collaborator/:id', getCollaboratorById);
router.put('/collaborator/:id', updateCollaborator);
router.delete('/collaborator/:id', deleteCollaborator);

module.exports = router