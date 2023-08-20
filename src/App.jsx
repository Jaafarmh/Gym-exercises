import {Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import ExerciseDetail from './pages/exerciseDetail' 
import './App.css'
import { ExerciseContextProvider } from './Context/exerciseContext'
const  App =() => {

  return (
        
    <ExerciseContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />  
    </ExerciseContextProvider>
    
  )
}

export default App
