import { Dimensions } from 'react-native'

const getWindow = Dimensions.get('window')

const screenWidth = Math.round(getWindow.width)
const screenHeight = Math.round(getWindow.height)

export { screenHeight, screenWidth }
