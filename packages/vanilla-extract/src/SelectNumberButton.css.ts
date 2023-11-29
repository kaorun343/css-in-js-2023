import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { colors } from './colors'

export const rootStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  width: 112,
  height: 34,
  border: `1px solid ${colors.light}`,
  borderRadius: 100,
})

export const buttonStyle = style({
  padding: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 34,
  height: 34,
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',

  ':disabled': {
    backgroundColor: 'transparent',
    cursor: 'auto',
  },
})

export const iconStyle = recipe({
  base: {
    color: colors.white,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: '50%',
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: colors.light,
      },
      false: {
        backgroundColor: colors.blueBase,
      },
    },
  },
})

export const countStyle = style({
  fontSize: 14,
  flexGrow: 1,
  textAlign: 'center',
})
