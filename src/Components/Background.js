import React, { memo } from 'react'
import { StyleSheet, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import Layout from '@/Theme/Layout'
import BackImage from '../Assets/Svg/background.svg'
import { screenHeight, screenWidth } from '@/Theme/Dimensions'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
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
  backImage: {
    ...ifIphoneX(
      {
        width: screenWidth,
        height: screenHeight,
      },
      {
        width: responsiveWidth(101),
        height: responsiveHeight(131),
      },
    ),
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
