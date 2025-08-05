import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Components/Header'
import Slider from './assets/Components/Slider'
import ProductionHouse from './assets/Components/ProductionHouse'
import GenreMovieList from './assets/Components/GenreMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      
      <Slider />

      <ProductionHouse />

      <GenreMovieList />
    </div>
  )
}

export default App
