import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const screenWidth = Math.round(width)
const screenHeight = Math.round(height)

export { screenHeight, screenWidth }
