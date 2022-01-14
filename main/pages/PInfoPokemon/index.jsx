import React, { useState, useEffect } from 'react'
import { observer, useQuery, useValue, useModel, useDoc, emit } from 'startupjs'
import { Content, Span, Div, Row, Avatar, Button, TextInput, H4, Multiselect, NumberInput } from '@startupjs/ui'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import _cloneDeep from 'lodash/cloneDeep'
import _pick from 'lodash/pick'
import axios from 'axios'
import './index.styl'

const INITIAL_FORM_STATE = {
  name: '',
  height: null,
  order: null,
  weight: null,
  sprites: { front_default: '' },
  types: [],
  abilities: [],
}

export default observer(function PInfoPokemon () {
  const $render = useModel('$render')
  const pokemonId = $render.get('params.pokemonId')
  const [ pokemon, $pokemon ] = useDoc('pokemons', pokemonId)
  const [ isEdit, $isEdit ] = useValue()
  const types = pokemon.types
  const abilities = pokemon.abilities

  const fields = Object.keys(INITIAL_FORM_STATE)

  const [ form, $form ] = useValue(_pick(pokemon, fields))

  console.log(_pick(pokemon, fields))
  console.log(form)

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
  const [ heightField, setHeightField ] = useState()
  const [ orderField, setOrderField ] = useState()
  const [ spelField, setSpelField ] = useState()
  
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

    if (form.height == '' || form.height === null) {
      setHeightField(requiredError) 
      validation = false
    } else {
      setHeightField()
    }

    if (form.order == '' || form.order === null) {
      setOrderField(requiredError) 
      validation = false
    } else {
      setOrderField()
    }

    if (form.abilities.length === 0) {
      setSpelField(requiredError) 
      validation = false
    } else {
      setSpelField('') 
    }

    if(validation) {
      $pokemon.edit(form)
      $isEdit.del()
    }
  }

  const [ allTypes, setAllTypes ] = useState([])

  async function loadTypes() {
    const resp = await axios.get(`https://pokeapi.co/api/v2/type`)
    const { data: { results: allTypes } } = resp
    setAllTypes(allTypes.map((type, index) => ({ value: type.name, label: type.name, key:type.name + index})))
  }

  const [ allSpels, setAllSpels ] = useState([])

  async function loadSpels() {
    const count = await axios.get(`https://pokeapi.co/api/v2/ability`)
    const { data: { count: v } } = count
    const resp = await axios.get(`https://pokeapi.co/api/v2/ability?limit=${v}`)
    const { data: { results: allSpels } } = resp
    setAllSpels(allSpels.map((spel) => ({ value: spel.name, label: spel.name })))
  }

  useEffect(() => {
    loadSpels()
    loadTypes()
  }, [])


  function toggleEdit () {
    $isEdit.set(!isEdit)
  }

  return pug`
    Content(
      style={
        alignItems: 'center',
        justifyContent: 'center'
      }
      width='full'
      padding
      full
    )  
      Div.container
        if isEdit
          H4.title(
            bold
          ) Eddit #{pokemon.name}!
          Div
            Span Name:
            TextInput.inputStyle(
              value=form.name
              placeholder='Enter name'
              onChangeText=(v) => $form.set('name', v)
            )
            Span.errorField()= nameField
          Div
            Span Sprite:
            TextInput.inputStyle(
              value=form.sprites.front_default
              onChangeText=(v) => $form.set('sprites.front_default', v)
              placeholder='Enter link for pic'
            )
            Span.errorField()= spriteField
          Div.inputStyle
            Span Types:
            Multiselect(
              value=getTypes(form.types)
              options=allTypes
              tagLimit=2
              placeholder='Select the type pokemon'
              onChange=onTypesChange
            )
            Span.errorField()= typeField
          Div
            Span Weight:
            NumberInput.inputStyle(
              placeholder='Enter weight'
              value=form.weight
              error='The field is required'
              onChangeNumber=(v) => $form.set('weight', v)
            )
            Span.errorField()= weightField
          Div
            Span Height:
            NumberInput.inputStyle(
              placeholder='Enter Height'
              value=form.height
              error='The field is required'
              onChangeNumber=(v) => $form.set('height', v)
            )
            Span.errorField()= heightField
          Div
            Span Order:
            NumberInput.inputStyle(
              placeholder='Enter order'
              value=form.order
              error='The field is required'
              onChangeNumber=(v) => $form.set('order', v)
            )
            Span.errorField()= orderField
          Div.inputStyle
            Span Abilities:  
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
          ) Save
        else
          Div.features
            Row
              Span.table Name:
              Span(
                bold
              )=pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
            Row
              Span.table Height:
              Span(
                bold
              )=pokemon.height
            Row
              Span.table Order:
              Span(
                bold
              )=pokemon.order
            Row
              Span.table Weight:
              Span(
                bold
              )=pokemon.weight
            Row
              Span.table Types:
                each type in types
                  - const typeName = type.type.name[0].toUpperCase() + type.type.name.slice(1);
                  Span.type(
                    bold
                    styleName=[type.type.name]
                  )= typeName 
            Row
              Span.table Abilities:
                each ability in abilities
                  - const abilityName = ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1);
                  Span.abil(
                    bold
                  )= abilityName
          Div.avatar
            Avatar(
              src=pokemon.sprites.front_default
              size='300px'
            )
      Row.sectionButton
        Button(
          color='warning'
          variant='flat'
          icon=faEdit
          onPress=toggleEdit
        )
        Button(
          color='error'
          variant='flat'
          icon=faTrash
          onPress=() => {
            emit('url', '/')
            $pokemon.del()
          }
        )
  `
})
