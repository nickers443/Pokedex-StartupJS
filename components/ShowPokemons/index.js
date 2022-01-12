import React, { useState, useEffect } from 'react'
import { useQuery, observer, useValue } from 'startupjs'
import { Pagination, Div, Row, Select, Multiselect, TextInput, Button } from '@startupjs/ui'
import PokemonCard from '../PokemonCard'
import axios from 'axios'
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(function ShowPokemons () {
  const [ skip, $skip ] = useValue(0)
  const [ valueNumber, setValueNumber ] = useState(10)
  const [ selectedTypes, setSelectedTypes ] = useState([])
  const [ allTypes, setAllTypes ] = useState([])
  const [ valueSearch, $valueSearch ] = useValue('')

  async function loadTypes() {
    const resp = await axios.get(`https://pokeapi.co/api/v2/type`) 
    const { data: {results: allTypes} } = resp
    setAllTypes(allTypes.map((type) => ({ value: type.name, label: type.name })))
  }

  useEffect(() => {
    loadTypes()
  }, [])

  const [ pokemons, $pokemons ] = useQuery('pokemons', { 
    $sort: { order: 1 }, 
    order: { $gte: 1 },
    name: { $regex: valueSearch, $options:'i' },
    'types.type.name': {$in: selectedTypes.length ? selectedTypes : allTypes.map(t => t.value)},
    $skip: skip, 
    $limit: valueNumber
  })

  const [ count ] = useQuery('pokemons', { 
    $sort: { order: 1 }, 
    order: { $gte: 1 }, 
    name: { $regex: valueSearch, $options:'i' },
    'types.type.name': {$in: selectedTypes.length ? selectedTypes : allTypes.map(t => t.value)},
    $count: true 
  })

  return pug`
    Row(
      align='center'
      wrap=true
    )
      Div.inputStyle
        Multiselect(
          value=selectedTypes
          onChange=setSelectedTypes
          options=allTypes
          tagLimit=2
          placeholder='Select the type pokemon'
        )
        Button.clearBtn(
          icon=faTimesCircle
          renderTooltip='Reset types'
          size='m'
          variant='text'
          onPress=() => setSelectedTypes([])
        )
      TextInput.inputStyle(
        icon=faSearch
        secondaryIcon=faTimesCircle
        placeholder='Enter the name'
        value=valueSearch
        onChangeText=val => $valueSearch.set(val)
        onSecondaryIconPress=() => $valueSearch.set('')
      )
    Div.main
      each pokemon in pokemons
        PokemonCard(
          pokemonId=pokemon.id
          key=pokemon.id
          name=pokemon.name
          src=pokemon.sprites.front_default
          order=pokemon.order
          types=pokemon.types
          weight=pokemon.weight
          spels=pokemon.abilities
        )
    Row(
      align='center'
      wrap=true
    )
      Pagination(
        count=count
        limit=valueNumber
        skip=skip
        boundaryCount=2
        siblingCount=0
        onChangePage=val => $skip.set(val * valueNumber)
      )
      Select(
        value=valueNumber
        onChange=(val) => {
          $skip.set(0)
          setValueNumber(val)
        }
        showEmptyValue=false
        options=[
          10,
          20,
          40
        ]
      )
  `
})