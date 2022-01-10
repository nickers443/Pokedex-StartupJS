import { BaseModel } from 'startupjs/orm'

export default class BasePokemonModel extends BaseModel {
  async edit(fields) {
    await this.setEach(fields)
  }
}  