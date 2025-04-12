import './App.css'
import { Element } from 'react-scroll'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Experience from './pages/experience/Experience'
// import Testimonials from './pages/testimonials/Testimonials';
// import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'

function App() {

  return (
    <>
      <Element name='home'>
        <Home />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='experience'>
        <Experience />
      </Element>
      {/* <Element name='testimonials'>
        <Testimonials />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element> */}
      <Element name='footer'>
        <Footer />
      </Element>
      
      {/* <ToastContainer /> */}
    </>
  )
}

export default App
