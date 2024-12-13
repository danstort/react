import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MiPrimerComponente from './components/miPrimerComponente/MiPrimerComponente'
import MiSegundoComponente from './components/MiSegundoComponente/MiSegundoComponente'

function App() {
  

  return (
    <>
      <div>
       
      </div>
      <h1>Dani</h1>
      
      <MiPrimerComponente />
      <MiSegundoComponente titulo = "Mi segundo componente" 
                            miNombre = "Dani">
                              
                            </MiSegundoComponente>
    </>
  )
}

export default App
