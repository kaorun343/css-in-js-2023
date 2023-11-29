import { FC, PropsWithChildren } from 'react'
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
    <div className="root">
      <style jsx>{`
        .root {
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          width: 112px;
          height: 34px;
          border: 1px solid ${colors.light};
          border-radius: 100px;
        }

        .button {
          padding: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        .button:disabled {
          background-color: transparent;
          cursor: auto;
        }

        .count {
          font-size: 14px;
          flex-grow: 1;
          text-align: center;
        }
      `}</style>
      <button className="button" type="button" aria-label="減らす" onClick={decrement} disabled={isDecrementDisabled}>
        <Icon disabled={isDecrementDisabled}>-</Icon>
      </button>
      <div className="count">{value}</div>
      <button className="button" type="button" aria-label="増やす" onClick={increment} disabled={isIncrementDisabled}>
        <Icon disabled={isIncrementDisabled}>+</Icon>
      </button>
    </div>
  )
}

const Icon: FC<PropsWithChildren & { disabled: boolean }> = ({ children, disabled }) => {
  return (
    <span className="icon">
      <style jsx>{`
        .icon {
          color: ${colors.white};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: ${disabled ? colors.light : colors.blueBase};
        }
      `}</style>
      {children}
    </span>
  )
}
