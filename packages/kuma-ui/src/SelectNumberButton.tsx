import { Box, Flex, css } from '@kuma-ui/core'
import { cva } from 'class-variance-authority'
import { FC } from 'react'

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
    <Flex
      alignItems="center"
      justifyContent="space-between"
      boxSizing="border-box"
      width={112}
      height={34}
      borderWidth={1}
      borderStyle="solid"
      borderColor="colors.white"
      borderRadius={100}
    >
      <button
        className={buttonStyle}
        type="button"
        aria-label="減らす"
        onClick={decrement}
        disabled={isDecrementDisabled}
      >
        <span className={iconStyle({ disabled: isDecrementDisabled })}>-</span>
      </button>
      <Box fontSize={14} flexGrow={1} textAlign="center">
        {value}
      </Box>
      <button
        className={buttonStyle}
        type="button"
        aria-label="増やす"
        onClick={increment}
        disabled={isIncrementDisabled}
      >
        <span className={iconStyle({ disabled: isIncrementDisabled })}>+</span>
      </button>
    </Flex>
  )
}

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

const iconStyle = cva(
  [
    css`
      color: t('colors.white');
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
    `,
  ],
  {
    variants: {
      disabled: {
        true: css`
          background-color: t('colors.light');
        `,
        false: css`
          background-color: t('colors.blueBase');
        `,
      },
    },
  },
)
