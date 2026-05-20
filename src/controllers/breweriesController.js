const breweriesService = require('../services/breweriesService')

const getAllBreweries = async (req, res, next) => {
  try {
    const breweries = await breweriesService.findAllBreweries(req.query)
    res.json(breweries)
  } catch (err) {
    next(err)
  }
}

const getBreweryById = async (req, res, next) => {
  try {
    const brewery = await breweriesService.findBreweryById(req.params.id)
    if (!brewery) return res.status(404).json({ error: 'Brasserie introuvable' })
    res.json(brewery)
  } catch (err) {
    next(err)
  }
}

module.exports = { getAllBreweries, getBreweryById }
