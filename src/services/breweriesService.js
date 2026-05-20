const supabase = require('../db/supabase')

const findAllBreweries = async ({ city } = {}) => {
  let query = supabase.from('breweries').select('*')

  if (city) query = query.ilike('city', `%${city}%`)

  const { data, error } = await query
  if (error) throw error
  return data
}

const findBreweryById = async (id) => {
  const { data, error } = await supabase
    .from('breweries')
    .select(`
      *,
      beers (id, name, style, abv, description)
    `)
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

module.exports = { findAllBreweries, findBreweryById }
