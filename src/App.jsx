import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRountes.jsx'

function App() {
  const [count, setCount] = useState(0)
const element = <h1>Hello, Mahesh!</h1>;
  return <AppRoutes />
}

export default App
