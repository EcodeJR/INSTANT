import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Loading from '../components/Loading'
import { useState, useEffect } from 'react'
import Footer from "../components/footer";

const RootLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const asyncOperation = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(asyncOperation);
    }, []);

    return ( <>
        {loading ? (<Loading />) :
      (
        <section className="w-screen h-full scroll-smooth">
            <NavBar />
            <Outlet />
            <Footer />
        </section>
      )
    }
    </> );
}
 
export default RootLayout;