import './App.css'

import ColorLoading from 'components/ColorLoading'
import Button from 'components/Button'
import { useEffect, useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 3000)
    }
  }, [isLoading])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button onClick={() => setIsLoading(true)} disabled={isLoading} />
          {isLoading && <ColorLoading />}
        </div>
      </header>
    </div>
  )
}

export default App
