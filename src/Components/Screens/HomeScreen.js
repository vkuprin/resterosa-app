import React, { memo } from 'react'
import { Background, Logo, Header, Button, Paragraph } from '@/Components'

const HomeScreen = ({ navigation }) => (
  <Background>
    <Header>ResteRosa</Header>
    <Paragraph>The easiest way to find a meeting</Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
  </Background>
)

export default memo(HomeScreen)
