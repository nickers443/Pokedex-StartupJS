import React from 'react'
import { ScrollView } from 'react-native'
import { observer, useQuery, useValue } from 'startupjs'
import { Content, Loader, Span, Div } from '@startupjs/ui'
import LoadPokemons from '../../../components/LoadPokemons'
import ShowPokemons from '../../../components/ShowPokemons'
import './index.styl'

export default observer(function PHome () {
  const [ count ] = useQuery('pokemons', { $count: true })
  const [ loading, $loading ] = useValue()

  return pug`
    Content.root(
      style={
        alignItems: 'center',
        justifyContent: 'center'
      }
      width='full'
      padding
    )
      if count 
        if loading
          Loader(
            color='error'
          )
          Span Wait for loading pokemons
        else
          ShowPokemons
      else 
        LoadPokemons(
          onStart=() => $loading.set(true)
          onFinish=() => $loading.del()
        )
  `
})
