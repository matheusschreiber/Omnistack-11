const { celebrate, Segments, Joi } = require('celebrate')
const express = require('express')
const router = express.Router()

const ongController = require('./controllers/OngController')
const incidentsController = require('./controllers/IncidentsController')
const profileController = require('./controllers/ProfileController')
const sessionsController = require('./controllers/SessionsController')


router.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required()
  })
}),sessionsController.createSession)

router.get('/ongs', ongController.listOngs)

router.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required()
  })
}), ongController.createOng)

router.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}),incidentsController.listIncidents)

router.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().max(20),
    description: Joi.string(),
    value: Joi.number()
  })
}),incidentsController.createIncident)

router.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), incidentsController.deleteIncident)

router.get('/incidents/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    //as keys precisam estar em letra minúscula
    authorization: Joi.string().required()
  }).unknown()
}), profileController.listIncidents)


module.exports = router;