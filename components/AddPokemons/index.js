import React, { useMemo, useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { observer, useValue, useQuery, useModel } from 'startupjs'
import { Content, Modal, Div, Tooltip, H4, Button, TextInput, NumberInput, Row, Multiselect, Span } from '@startupjs/ui'
import _cloneDeep from 'lodash/cloneDeep'
import axios from 'axios'
import './index.styl'

const INITIAL_FORM_STATE = {
  name: '',
  sprites: { front_default: '' },
  types: [],
  weight: null,
  abilities: [],
}

export default observer( function AddPokemon() {
  const [ form, $form ] = useValue(_cloneDeep(INITIAL_FORM_STATE))
  const $pokemons = useModel('pokemons')
  const [ order, $order ] = useQuery('pokemons', {
    $sort: { order: -1 },
    $limit: 1
  })

  function onTypesChange( values ) {
    const result = []

    values.forEach(( value, index ) => {
      result.push({
        slot: index + 1,
        type: {
          name: value
        }
      })
    })
    $form.set('types', result)
  }

  function getTypes( types ) {
    return types.map(item => {
      return item.type.name
    })
  }

  function onSpelsChange( values ) {
    const result = []

    values.forEach(( value, index ) => {
      result.push({
        slot: index + 1,
        ability: {
          name: value
        }
      })
    })
    $form.set('abilities', result)
  }

  function getSpels( spels ) {
    return spels.map(item => {
      return item.ability.name
    })
  }

  let validation = true
  const regex = /^[a-zA-Z\s]+$/
  const requiredError = 'This field is required'
  const nameFieldError = 'Enter only latin letters'
  const [ visible, $visible ] = useValue(false)
  const [ nameField, setNameField ] = useState()
  const [ spriteField, setSpriteField ] = useState()
  const [ typeField, setTypeField ] = useState()
  const [ weightField, setWeightField ] = useState()
  const [ spelField, setSpelField ] = useState()
  const [ pokeName, setPokeName ] = useState()
  
  function addPokemon() {
    if (form.name == '' || form.name === null) {
      setNameField(requiredError)
      validation = false
    } else if (regex.test(form.name) === false) {
      setNameField(nameFieldError)
      validation = false
    } else {
      setNameField('')
    }

    if (form.sprites.front_default == '' || form.sprites.front_default === null) {
      setSpriteField(requiredError) 
      validation = false
    } else {
      setSpriteField('')
    }

    if (form.types.length === 0 ) {
      setTypeField(requiredError) 
      validation = false
    } else {
      setTypeField('')
    }

    if (form.weight == '' || form.weight === null) {
      setWeightField(requiredError) 
      validation = false
    } else {
      setWeightField()
    }

    if (form.abilities.length === 0) {
      setSpelField(requiredError) 
      validation = false
    } else {
      setSpelField('') 
    }

    const newOrder = order[0].order + 1
    if(validation) {
      setPokeName(form.name)
      $visible.set(true)
      $pokemons.add({ ...form, order: newOrder })
      $form.set(INITIAL_FORM_STATE)
    }
  }

  const [ allTypes, setAllTypes ] = useState([])

  async function loadTypes() {
    const resp = await axios.get(`https://pokeapi.co/api/v2/type`)
    const { data: { results: allTypes } } = resp
    setAllTypes(allTypes.map((type) => ({ value: type.name, label: type.name })))
  }

  const [ allSpels, setAllSpels ] = useState([])

  async function loadSpels() {
    const resp = await axios.get(`https://pokeapi.co/api/v2/ability`)
    const { data: { results: allSpels } } = resp
    setAllSpels(allSpels.map((spel) => ({ value: spel.name, label: spel.name })))
  }

  useEffect(() => {
    loadSpels()
    loadTypes()
  }, [])


  return pug`
    ScrollView
      Content.container
        H4.title(
          bold
        ) Create new pokemon!
        Div
          TextInput.inputStyle(
            value=form.name
            placeholder='Enter name'
            onChangeText=(v) => $form.set('name', v)
          )
          Span.errorField()= nameField
        Div
          TextInput.inputStyle(
            value=form.sprites.front_default
            onChangeText=(v) => $form.set('sprites.front_default', v)
            placeholder='Enter link for pic'
          )
          Span.errorField()= spriteField
        Div.inputStyle
          Multiselect(
            value=getTypes(form.types)
            options=allTypes
            tagLimit=2
            placeholder='Select the type pokemon'
            onChange=onTypesChange
          )
          Span.errorField()= typeField
        Div
          NumberInput.inputStyle(
            placeholder='Enter weight'
            value=form.weight
            error='The field is required'
            onChangeNumber=(v) => $form.set('weight', v)
          )
          Span.errorField()= weightField
        Div.inputStyle
          Multiselect(
            value=getSpels(form.abilities)
            options=allSpels
            tagLimit=2
            placeholder='Select the spels pokemon'
            onChange=onSpelsChange
          )
          Span.errorField()= spelField
        Button(
          color='primary'
          variant='flat'
          onPress=() => {
            addPokemon()
          }
        ) Load new Pokemon
    Modal(
      title='Succeful'
      $visible=$visible
    )
      Span Pokemon #{pokeName} added
  `
})
