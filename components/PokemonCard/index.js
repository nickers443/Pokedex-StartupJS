import React from 'react'
import { observer, emit } from 'startupjs'
import { Avatar, Card, Span, H4 } from '@startupjs/ui'
import './index.styl'

export default observer(function PokemonCard({ name, src, order, types, weight, spels, pokemonId }) {
	return pug`
		Card.main(
			style={ margin: 16 }
			variant='elevated'
			onPress=() => emit('url', '/info/' + pokemonId)
		)
			Span.name=name[0].toUpperCase() + name.slice(1)
			Avatar.mainAvatar(
				size='80px'
				src=src
			)= name
			Span(bold) Order:
				Span  #{order}      
			Span(bold) Types:
				each type in types
					- const typeName = type.type.name[0].toUpperCase() + type.type.name.slice(1);
					Span.type(
						styleName=[type.type.name]
					)= typeName    
			Span(bold) Weight: 
				Span #{weight} Kg
			Span(bold) Spels:
				each spel in spels
					Span= ' ' + spel.ability.name[0].toUpperCase() + spel.ability.name.slice(1)
	`
})