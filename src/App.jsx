import Home from './components/Home';
import NavBar from './components/NavBar'
import Loading from './components/Loading'
import { useState, useEffect } from 'react'
{

  /** import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/

}

function App() {
  {/*const [count, setCount] = useState(0)*/}
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 18000);
}, []);

  return (
    <>
    {loading ? (<Loading />) :
      (
      <section className="w-screen h-full overflow-x-hidden">
        <NavBar />
        <Home />
      </section>
      )
    }
    </>
  )
}

export default App;
