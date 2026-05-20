const supabase = require('../db/supabase')

const findAllBeers = async ({ search, style, brewery_id } = {}) => {
  let query = supabase
    .from('beers')
    .select(`
      *,
      breweries (id, name, city)
    `)

  if (search)     query = query.ilike('name', `%${search}%`)
  if (style)      query = query.ilike('style', `%${style}%`)
  if (brewery_id) query = query.eq('brewery_id', brewery_id)

  const { data, error } = await query
  if (error) throw error
  return data
}

const findBeerById = async (id) => {
  const { data, error } = await supabase
    .from('beers')
    .select(`
      *,
      breweries (id, name, city, website)
    `)
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

const findBeerLocations = async (id) => {
  const { data, error } = await supabase
    .from('beer_locations')
    .select(`
      locations (id, name, address, city, lat, lng, type)
    `)
    .eq('beer_id', id)

  if (error) throw error
  return data.map(row => row.locations)
}

module.exports = { findAllBeers, findBeerById, findBeerLocations }
