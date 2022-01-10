import { BaseModel } from 'startupjs/orm'
import axios from 'axios'

export default class BasePokemonsModel extends BaseModel {
    async addNew(fields) {
        const id = await this.add(fields)
        return id
    }

    async addByName(name) {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`
        const res = await axios.get(apiUrl)
        const pokemon = res.data
        delete pokemon.id
        const id = await this.addNew(pokemon)
        return id
    }
}