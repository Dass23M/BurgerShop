import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Middle from './Components/Middle/Middle'
import Menu from './Components/Menu/Menu'
import Banner from './Components/Promotion/Promotion'
import Contact from './Components/Cont/Contact'
import Footer from './Components/Footer/Footer'




const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      <Title title='Welcome to Our Burger Shop' subTitle='Our mission is to provide the best burgers in town, with a focus on fresh, high-quality ingredients'/>
      <Programs/>
      <div className="container">
      <About/>
      </div>
      <Middle/>
      <Menu/>
      <Banner/>
      <div className="container">
      <Title title='Contact Us'/> 
      <Contact/>
      </div>
      <Footer/>
      
     
    </div>
    </>
  )
}

export default App