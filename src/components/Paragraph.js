import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native'
import { theme } from '@/core'

const Paragraph = ({ children }) => <Text style={styles.text}>{children}</Text>

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Quicksand',
    color: theme.colors.secondary,
    textAlign: 'center',
    marginBottom: 14,
    fontWeight: '500',
    fontSize: 36,
    // lineHeight: 45,
  },
})

export default memo(Paragraph)
