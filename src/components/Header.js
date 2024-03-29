import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native'
import { theme } from '@/core'

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>

const styles = StyleSheet.create({
  header: {
    fontFamily: 'MajorMonoDisplay-Regular',
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
})

export default memo(Header)
