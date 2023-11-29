import { css } from '@emotion/react'
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
    <div css={rootStyle}>
      <button css={buttonStyle} type="button" aria-label="減らす" onClick={decrement} disabled={isDecrementDisabled}>
        <span css={getIconStyle(isDecrementDisabled)}>-</span>
      </button>
      <div css={countStyle}>{value}</div>
      <button css={buttonStyle} type="button" aria-label="増やす" onClick={increment} disabled={isIncrementDisabled}>
        <span css={getIconStyle(isIncrementDisabled)}>+</span>
      </button>
    </div>
  )
}

const rootStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 112px;
  height: 34px;
  border: 1px solid ${colors.light};
  border-radius: 100px;
`

const buttonStyle = css`
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: transparent;
    cursor: auto;
  }
`

const getIconStyle = (disabled: boolean) => css`
  color: ${colors.white};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${disabled ? colors.light : colors.blueBase};
`

const countStyle = css({
  fontSize: 14,
  flexGrow: 1,
  textAlign: 'center',
})
