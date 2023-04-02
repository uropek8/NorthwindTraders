import { FC, ReactElement, useState, useEffect } from 'react'

import { ClockBlock } from './Clock.styles'

const Clock: FC = (): ReactElement => {
  const [date, setDate] = useState(new Date())
  const updateClock = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(updateClock, 1000)

    return function cleanup() {
      timerId
    }
  }, [])

  return <ClockBlock>{date.toLocaleTimeString('en-GB')}</ClockBlock>
}

export default Clock
