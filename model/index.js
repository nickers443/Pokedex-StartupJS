import initI18nModel from 'startupjs/i18n/model'
import BasePokemonModel from './BasePokemonModel'
import BasePokemonsModel from './BasePokemonsModel'

export default function (racer) {
  initI18nModel(racer)
  racer.orm('pokemons.*', BasePokemonModel)
  racer.orm('pokemons', BasePokemonsModel)
}
 