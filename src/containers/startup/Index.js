import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { Layout, Fonts, Gutters } from '@/theme'
import { useDispatch } from 'react-redux'
import InitStartup from '@/store/startup/Init'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/components'

const IndexStartupContainer = ({ navigation }) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  )
}

export default IndexStartupContainer
