import React from 'react'

const Loading = () => {
  const [tickedTimes, setTickedTimes] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(
      () => setTickedTimes(tickedTimes => tickedTimes + 1),
      500
    )
    return () => clearInterval(interval)
  })

  return `Loading ${'.'.repeat(tickedTimes)}`
}

export default Loading
