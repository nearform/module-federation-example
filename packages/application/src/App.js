import './App.css'

import RedLoading from 'components/RedLoading'
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
          {isLoading && <RedLoading />}
          <Button onClick={() => setIsLoading(true)} disabled={isLoading} />
        </div>
      </header>
    </div>
  )
}

export default App
