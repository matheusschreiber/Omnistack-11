const express = require('express')
const router = express.Router()

const ongController = require('./controllers/OngController')
const incidentsController = require('./controllers/IncidentsController')
const profileController = require('./controllers/ProfileController')
const sessionsController = require('./controllers/SessionsController')

router.post('/sessions', sessionsController.createSession)

router.get('/ongs', ongController.listOngs)
router.post('/ongs', ongController.createOng)

router.get('/incidents', incidentsController.listIncidents)
router.post('/incidents', incidentsController.createIncident)
router.delete('/incidents/:id', incidentsController.deleteIncident)
router.get('/incidents/profile', profileController.listIncidents)


module.exports = router;