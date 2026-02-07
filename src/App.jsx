import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/hero/Hero'
import { Features } from './Components/Features/Features'
import { Title } from './Components/Title/Title'
import { About } from './Components/About/About'
import { Gallery } from './Components/Gallery/Gallery'
import { Testimonials } from './Components/Testimonials/Testimonials'
import { Contact } from './Components/Contact/Contact'
import { Footer } from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Features" title="Features" />
        <Features />
        <About/>
        <Title subTitle="Gallery" title="Products" />
        <Gallery/>
        <Title subTitle="Testimonials" title="What People Say" />
<Testimonials/>
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact/>
        <Footer/>

      </div>

    </div>
  )
}

export default App