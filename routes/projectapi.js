const express = require('express');
const passport = require('passport');
const { getAllProjects, getProjectById, updateProject, deleteProject, createProject, getResponsablesForProject } = require('../controllers/project.controller');
const router = express.Router()

router.post('/projet',passport.authenticate("bearer", { session: false }), createProject);
router.get('/projet',passport.authenticate("bearer", { session: false }), getAllProjects);
router.get('/projet/:id',passport.authenticate("bearer", { session: false }), getProjectById);
router.put('/projet/:id',passport.authenticate("bearer", { session: false }), updateProject);
router.delete('/projet/:id',passport.authenticate("bearer", { session: false }), deleteProject);
router.get('/respList', getResponsablesForProject);

module.exports = router