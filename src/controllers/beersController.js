const beersService = require('../services/beersService')

const getAllBeers = async (req, res, next) => {
  try {
    const beers = await beersService.findAllBeers(req.query)
    res.json(beers)
  } catch (err) {
    next(err)
  }
}

const getBeerById = async (req, res, next) => {
  try {
    const beer = await beersService.findBeerById(req.params.id)
    if (!beer) return res.status(404).json({ error: 'Bière introuvable' })
    res.json(beer)
  } catch (err) {
    next(err)
  }
}

const getBeerLocations = async (req, res, next) => {
  try {
    const locations = await beersService.findBeerLocations(req.params.id)
    res.json(locations)
  } catch (err) {
    next(err)
  }
}

module.exports = { getAllBeers, getBeerById, getBeerLocations }
