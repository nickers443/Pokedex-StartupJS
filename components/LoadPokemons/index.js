import React, { useEffect, useState }  from 'react'
import { observer, useQuery, useApi, useModel } from 'startupjs'
import { H1, Button, Icon, Span, Div } from '@startupjs/ui'
import { faAd } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

export default observer(function LoadPokemons ({ onStart, onFinish }) {
  const $pokemons = useModel('pokemons')
  async function loadData() {
    onStart && onStart()
    const { data: {count} } = await axios.get(apiUrl) 
    const resp = await axios.get(`${apiUrl}?limit=${count}`)
    const { data: {results: allPokemons} } = resp
    
    let i = 0
    let promises = []

    for ( const pokemon of allPokemons ) {
      promises.push($pokemons.addByName(pokemon.name))

      i++

      if(!(i % 10)) {
        await Promise.all(promises)
        promises = []
      }
    }
    await Promise.all(promises)
    onFinish && onFinish()
  }

  return pug`
    Button(
      style={
        maxWidth:'500px',
        height: '40px'
      }
      size='m'
      color='primary'
      icon=faAd
      iconPosition='right'
      variant='flat'
      onPress=loadData
    ) Загрузка покемонов в MongoDB
  `
})