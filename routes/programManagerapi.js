const express = require('express');
const { createProjectManager, getAllProjectManagers, getProjectManagerById, updateProjectManager, deleteProjectManager } = require('../controllers/projectManager.controller');
const router = express.Router()

router.post('/projectManager', createProjectManager);
router.get('/projectManager', getAllProjectManagers);
router.get('/projectManager/:id', getProjectManagerById);
router.put('/projectManager/:id', updateProjectManager);
router.delete('/projectManager/:id', deleteProjectManager);

module.exports = router