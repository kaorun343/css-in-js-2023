import { createTheme } from '@kuma-ui/core'
import { colors } from './src/colors'

const theme = createTheme({
  colors,
})

type UserTheme = typeof theme

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme
