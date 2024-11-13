import './App.css'
import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className="h-full flex flex-col flex-1 overflow-y-hidden">
      <NavBar></NavBar>
      <div className="bg-background flex flex-1 justify-center items-center m-auto h-full w-full">
        <Link to="/shop/" className='text-9xl font-bold text-primary'>ENTER THE SHOP</Link>
      </div>
    </div>
  )
}

export default App
