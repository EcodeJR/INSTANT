import Home from './pages/Home';
//pages
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPages';
import BookingPage from './pages/BookingPage';


import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
  } from 'react-router-dom';
  //Layout
import RootLayout from './pages/RootLayout';
import NotFound from './pages/NotFound';
import GallaryPage from './pages/GallaryPage';
import Policies from './pages/policies';
import Terms from './pages/Terms&Conditions';
{

  /** import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/

}

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='services' element={<ServicesPage />} />
          <Route path='gallary' element={<GallaryPage />} />
          <Route path='booking' element={<BookingPage />} />
          <Route path='policies' element={<Policies />} />
          <Route path='terms' element={<Terms />} />
          <Route path='*' element={<NotFound />} />
        </Route>
  )
)

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App;