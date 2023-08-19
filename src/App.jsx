import {Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import ExerciseDetail from './pages/exerciseDetail' 
import './App.css'

const  App =() => {

  return (
    < >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />  
    </>
  )
}

export default App
