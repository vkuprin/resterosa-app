import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Router from '@/Router'
import { Layout } from '@/Theme'
import './Translations'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaView style={Layout.fill}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <Router />
        </NavigationContainer>
      </SafeAreaView>
    </PersistGate>
  </Provider>
)

export default App
