import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from '../Components/Screens'

const Root = createStackNavigator()

const Router = () => {
  return (
    <Root.Navigator>
      <Root.Screen name="Screen1" component={HomeScreen} />
      <Root.Screen name="Screen2" component={LoginScreen} />
      <Root.Screen name="Screen3" component={Dashboard} />
    </Root.Navigator>
  )
}

export default Router
