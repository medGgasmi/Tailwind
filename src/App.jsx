import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex-col justify-center'>
      <div>
        
        
      </div>
      <h1 className='text-3xl font-bold underline rotate-12'>Adding tailwind</h1>
      <p className='m-10 text-tahiti text-3xl'>
       let use react table
      </p>
      <Table />
    </div>
  )
}

export default App
