import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Root = createStackNavigator()

const AuthRouter = ({ component, headerShown = false }) => (
  <Root.Navigator>
    <Root.Screen
      name={component.constructor.name}
      component={component}
      options={{ headerShown }}
    />
  </Root.Navigator>
)

export default AuthRouter
