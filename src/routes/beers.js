const express = require('express')
const router = express.Router()
const { getAllBeers, getBeerById, getBeerLocations } = require('../controllers/beersController')

router.get('/', getAllBeers)
router.get('/:id', getBeerById)
router.get('/:id/locations', getBeerLocations)

module.exports = router
