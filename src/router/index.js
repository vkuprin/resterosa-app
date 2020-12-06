import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from '../components/screens'

export const Root = createStackNavigator()

const Router = () => (
  <Root.Navigator>
    <Root.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Root.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Root.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Root.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
      options={{ headerShown: false }}
    />
    <Root.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        headerTitle: 'ResteRosa',
        headerStyle: {
          backgroundColor: '#034748',
        },
        headerLeft: null,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </Root.Navigator>
)

export default Router
