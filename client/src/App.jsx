
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </>
  )
}

export default App
