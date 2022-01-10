import React, { useMemo, useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { observer, useValue, useQuery, useModel } from 'startupjs'
import { Content, Modal, Div, Tooltip, H4, Button, TextInput, NumberInput, Row, Multiselect, Span } from '@startupjs/ui'
import AddPokemons from '../../../components/AddPokemons'
import './index.styl'

export default observer(function PAddPokemon() {
  
  return pug`
    ScrollView
      Content(
        padding
      )
        AddPokemons
  `
})
