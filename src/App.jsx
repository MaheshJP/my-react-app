import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Menu from './components/Menu.jsx'
import AppRoutes from './routes/AppRountes.jsx'

function App() {
  const [count, setCount] = useState(0)
const element = <h1>Hello, Mahesh!</h1>;
  return <>
    <Menu/>
    <AppRoutes/>
  </>
}

export default App
