const express = require('express')
const cors = require('cors')
require('dotenv').config()

const beersRouter = require('./routes/beers')
const breweriesRouter = require('./routes/breweries')
const errorHandler = require('./middleware/errorHandler')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Route de santé — pour vérifier que l'API tourne
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Bière QC API is running 🍺' })
})

app.use('/beers', beersRouter)
app.use('/breweries', breweriesRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`)
})
