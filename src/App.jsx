import Home from './pages/Home';
{/*
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPages';
import BookingPage from './pages/BookingPage';
*/}
import NavBar from './components/NavBar'
import Loading from './components/Loading'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
{

  /** import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/

}

function App() {
  {/*const [count, setCount] = useState(0)*/}
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const asyncOperation = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(asyncOperation);
  }, []);

  return (
    <>
    {loading ? (<Loading />) :
      (
      <section className="w-screen h-full scroll-smooth">
        <NavBar />
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
            {/*
              <Route path="about" element={<About />} />
            
              <Route path="contact" element={<Contact />}/>
          
              <Route path="services" element={<Services />}/>
                
              <Route path="faq"  element={<FAQ />}/>

              <Route path="term&condition"  element={<TermAndCondition />}/>
                
              <Route path="*"  element={<NotFound />}/>
          */}
          </Routes>
        </Router>
      </section>
      )
    }
    </>
  )
}

export default App;