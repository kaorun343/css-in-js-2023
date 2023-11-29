import { FC } from 'react'
import { buttonStyle, countStyle, iconStyle, rootStyle } from './SelectNumberButton.css'

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
