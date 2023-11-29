import { FC, useState } from 'react'
import { SelectNumberButton } from './SelectNumberButton'

export const App: FC = () => {
  const [value, setValue] = useState(2)

  return <SelectNumberButton value={value} onChange={setValue} min={0} max={4} />
}
