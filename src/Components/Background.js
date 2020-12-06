import React, { memo } from 'react'
import {
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native'
import BackImage from '../Assets/Svg/background.svg'

const Background = ({ children }) => (
  <SafeAreaView style={styles.background}>
    <BackImage style={styles.backImage} />
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backImage: {
    zIndex: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 240,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default memo(Background)
