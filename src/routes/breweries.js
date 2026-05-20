const express = require('express')
const router = express.Router()
const { getAllBreweries, getBreweryById } = require('../controllers/breweriesController')

router.get('/', getAllBreweries)
router.get('/:id', getBreweryById)

module.exports = router
