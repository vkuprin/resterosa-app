import React, { memo } from 'react'
import { StyleSheet, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import Layout from '@/Theme/Layout'
import BackImage from '../Assets/Svg/background.svg'
import { screenHeight, screenWidth } from '@/Theme/Dimensions'
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions'
import { ifIphoneX } from 'react-native-iphone-x-helper'

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
    ...Layout.fullSize,
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 240,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImage: {
    zIndex: 0,
    position: 'absolute',
    ...ifIphoneX(
      {
        width: screenWidth,
        height: screenHeight,
      },
      {
        width: responsiveWidth(101), // + 1 Because of SVG wrapper,
        height: responsiveHeight(131), // + 1 Because of SVG wrapper,
      },
    ),
  },
})

export default memo(Background)
