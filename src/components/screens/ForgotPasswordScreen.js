import React, { memo, useState } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { theme, utils } from '@/core'
import {
  BackButton,
  Background,
  Button,
  TextInput,
  Header,
  Logo,
} from '@/components'

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })

  const _onSendPressed = () => {
    const emailError = utils.emailValidator(email.value)

    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }

    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('LoginScreen')} />

      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </Background>
  )
}

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
})

export default memo(ForgotPasswordScreen)
