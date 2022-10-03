import {useState, useEffect} from 'react'

const Loading = () => {
  const [tickedTimes, setTickedTimes] = useState(0)
  useEffect(() => {
    const interval = setInterval(
      () => setTickedTimes(tickedTimes => tickedTimes + 1),
      500
    )
    return () => clearInterval(interval)
  }, [])

  return `Loading ${'.'.repeat(tickedTimes)}`
}

export default Loading
