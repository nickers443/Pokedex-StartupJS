import React from 'react'
import { observer, emit, useValue, useLocal } from 'startupjs'
import { Span, Button, Div, H1, Layout, Menu, Row, SmartSidebar, Icon } from '@startupjs/ui'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import APP from '../../app.json'
import './index.styl'
import CustomIconMenu  from '../img/menuBTN.svg'

const { displayName } = APP

const APP_NAME = displayName.charAt(0).toUpperCase() + displayName.slice(1)

const MenuItem = observer(({ url, children }) => {
  const [currentUrl] = useLocal('$render.url')
  return pug`
    Menu.Item(
      active=currentUrl === url
      onPress=() => emit('url', url)
    )= children
  `
})

export default observer(function ({ children }) {
  const [opened, $opened] = useValue(false)

  function renderSidebar () {
    return pug`
      Menu.sidebar-menu
        MenuItem(url='/') App
        MenuItem(url='/addpokemon') Add Pokemon
        MenuItem(url='/about') About
    `
  }

  return pug`
    Layout.root
      SmartSidebar.sidebar(
        $open=$opened
        renderContent=renderSidebar
      )
        Row.menu
          Button.menuIcon(
            icon=CustomIconMenu
            onPress=() => $opened.set(!opened)
          ) Menu
          H1.logo= APP_NAME

        Div.body(
        )= children
  `
})
