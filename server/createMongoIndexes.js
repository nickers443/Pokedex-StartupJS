import { MongoClient } from 'mongodb'
import conf from 'nconf'

const indexes = [
  {
    collection: 'pokemons',
    indexes: [
      { order: 1 },
    ],
    options: false
  }
]


const DB_NAME = conf.get('MONGO_URL').split('/').pop().split('?').shift()

export default async function createMongoIndexes () {
  const client = await MongoClient.connect(conf.get('MONGO_URL'))
  
  const db = client.db(DB_NAME)
  
  console.log(db.database)
  for (const item of indexes) {
    for (const index of item.indexes) {
      await db.collection(item.collection).dropIndexes()
      const res = await db.collection(item.collection).createIndex(index, item.options)
    }
  }
  console.log('Info:', `Creating mongo indexes ${indexes.indexes}`)
  
  client.close()
}
