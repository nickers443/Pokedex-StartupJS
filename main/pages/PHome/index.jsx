import React, { useEffect, useState } from 'react'
import { observer, useQuery, useValue } from 'startupjs'
import { Content, Loader, Span, Div, Progress } from '@startupjs/ui'
import LoadPokemons from '../../../components/LoadPokemons'
import ShowPokemons from '../../../components/ShowPokemons'
import axios from 'axios'
import './index.styl'

export default observer(function PHome () {
  const [ countAll, setCountAll ] = useState()
  async function dataGet() {
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon`) 
    const { data: { count } } = resp 
    setCountAll(count)
  }
  
  useEffect(() => {
    dataGet()
  }, [])

  const [ countNow ] = useQuery('pokemons', { $count: true })
  const [ loading, $loading ] = useValue()

  return pug`
    Content.root(
      style={
        alignItems: 'center',
        justifyContent: 'center'
      }
      width='wide'
      padding
    )
      if countNow 
        if loading
          Loader(
            color='error'
          )
          Span Wait for loading pokemons #{countNow} from #{countAll}
        else
          ShowPokemons
      else 
        LoadPokemons(
          onStart=() => {
            $loading.set(true)
            dataGet()
          }
          onFinish=() => $loading.del()
        )
  `
})
