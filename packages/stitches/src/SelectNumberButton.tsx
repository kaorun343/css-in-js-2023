import { styled } from '@stitches/react'
import { FC } from 'react'
import { colors } from './colors'

type Props = {
  value: number
  onChange: (value: number) => void
  min: number
  max: number
}

export const SelectNumberButton: FC<Props> = ({ value, onChange, min, max }) => {
  const decrement = () => {
    onChange(Math.max(min, value - 1))
  }

  const increment = () => {
    onChange(Math.max(min, value - 1))
  }

  const isDecrementDisabled = value <= min
  const isIncrementDisabled = value >= max

  return (
    <Root>
      <Button type="button" aria-label="減らす" onClick={decrement} disabled={isDecrementDisabled}>
        <Icon disabled={isDecrementDisabled}>-</Icon>
      </Button>
      <Count>{value}</Count>
      <Button type="button" aria-label="増やす" onClick={increment} disabled={isIncrementDisabled}>
        <Icon disabled={isIncrementDisabled}>+</Icon>
      </Button>
    </Root>
  )
}

const Root = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  width: 112,
  height: 34,
  border: `1px solid ${colors.light}`,
  borderRadius: 100,
})

const Button = styled('button', {
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

const Icon = styled('span', {
  color: colors.white,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 28,
  height: 28,
  borderRadius: '50%',

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

const Count = styled('div', {
  fontSize: 14,
  flexGrow: 1,
  textAlign: 'center',
})
