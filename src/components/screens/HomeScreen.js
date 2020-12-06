import React, { memo } from 'react'
import { Background, Logo, Header, Button, Paragraph } from '@/components'

const HomeScreen = ({ navigation }) => (
  <Background>
    <Header>ResteRosa</Header>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Hello I’m ...
    </Button>
    {/*<Paragraph>Already have an account?</Paragraph>*/}
    <Button mode="outlined" onPress={() => navigation.navigate('LoginScreen')}>
      Sign in
    </Button>
  </Background>
)

export default memo(HomeScreen)
