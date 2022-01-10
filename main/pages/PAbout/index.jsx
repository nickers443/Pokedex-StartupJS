import React from 'react'
import { Text, ScrollView } from 'react-native'
import { observer } from 'startupjs'
import { Content, Div, Avatar, Row } from '@startupjs/ui'
import './index.styl'

export default observer(function PAbout () {
  return pug`
    ScrollView.root
      Content(padding)
        Row
          Div
            Avatar(
              size='117px'
              src='https://sun9-59.userapi.com/impg/TJj83iPZfPVJBXXysnXnynHDCzPTGkNaD1b9zA/i9kYGm8xew8.jpg?size=1620x2160&quality=96&sign=3340dd02923809057d7629c88c56fc4c&type=album'
              ) Dima Stremin
          Div
            Text.text Telegram: @Dstremin 
            Text.text Tel: +7 (978) 555-00-96 
            Text.text Built on StartupJS
    `
})
