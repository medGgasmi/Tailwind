import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        
      </div>
      <h1>Adding tailwind</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
       let use react table
      </p>
      <Table />
    </>
  )
}

export default App
