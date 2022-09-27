import { lazy, useState, Suspense } from 'react'

import reactLogo from './assets/react.svg'
import './App.css'

const Button = lazy(() => import('ui-components/Button'))
const UILoading = lazy(() => import('ui-components/UILoading'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <div>
          <Suspense fallback="Loading federated components...">
            <Button />
            <UILoading />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default App
