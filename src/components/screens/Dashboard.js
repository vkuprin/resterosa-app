import React, { memo } from 'react'
import { StyleSheet, ScrollView, Image } from 'react-native'
import {
  FAB,
  Portal,
  Provider,
  Surface,
  Text,
  Banner,
} from 'react-native-paper'

const Dashboard = ({ navigation }) => {
  const [state, setState] = React.useState({ open: false })
  const [visible, setVisible] = React.useState(true)

  const onStateChange = ({ open }) => setState({ open })

  const { open } = state
  return (
    <>
      <Provider>
        <Banner
          visible={visible}
          actions={[
            {
              label: 'Fix it',
              onPress: () => setVisible(false),
            },
            {
              label: 'Learn more',
              onPress: () => setVisible(false),
            },
          ]}
          icon={({ size }) => (
            <Image
              source={{
                uri:
                  'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
              }}
              style={{
                width: size,
                height: size,
              }}
            />
          )}
        >
          There was a problem processing a transaction on your credit card.
        </Banner>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              { icon: 'plus', onPress: () => console.log('Pressed add') },
              {
                icon: 'star',
                label: 'Star',
                onPress: () => console.log('Pressed star'),
              },
              {
                icon: 'email',
                label: 'Email',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: 'bell',
                label: 'Remind',
                onPress: () => console.log('Pressed notifications'),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
})

export default memo(Dashboard)
