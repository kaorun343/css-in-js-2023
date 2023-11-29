import { FC } from 'react'
import { css, cva } from '../styled-system/css'

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
    <div className={rootStyle}>
      <button
        className={buttonStyle}
        type="button"
        aria-label="減らす"
        onClick={decrement}
        disabled={isDecrementDisabled}
      >
        <span className={iconStyle({ disabled: isDecrementDisabled })}>-</span>
      </button>
      <div className={countStyle}>{value}</div>
      <button
        className={buttonStyle}
        type="button"
        aria-label="増やす"
        onClick={increment}
        disabled={isIncrementDisabled}
      >
        <span className={iconStyle({ disabled: isIncrementDisabled })}>+</span>
      </button>
    </div>
  )
}

const rootStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  width: 112,
  height: 34,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'white',
})

const buttonStyle = css({
  padding: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 34,
  height: 34,
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',

  _disabled: {
    backgroundColor: 'transparent',
    cursor: 'auto',
  },
})

const iconStyle = cva({
  base: {
    color: 'white',
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
        backgroundColor: 'light',
      },
      false: {
        backgroundColor: 'blueBase',
      },
    },
  },
})

const countStyle = css({
  fontSize: 14,
  flexGrow: 1,
  textAlign: 'center',
})
