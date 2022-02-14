import React from 'react'

import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  return (
    <section className='container-section'>
      <main className='center'>
        <Info />
        <About />
        <Interests />
        <Footer />
      </main>
    </section>
  )
}

export default App
