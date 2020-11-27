import React, { memo } from 'react'
import {
  View,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'

const Background = ({ children }) => (
  // <ImageBackground
  //   source={require('../Assets/Images/background_dot.png')}
  //   resizeMode="repeat"
  //   style={styles.background}
  // >
  <View style={styles.background}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </View>
  // </ImageBackground>
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default memo(Background)
