import { CgMenuRightAlt } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';


const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    const SmallScreen =
        <>
            <ul className='absolute top-[100%] left-0 flex flex-col items-center justify-around w-screen h-[70vh] bg-primary font-bold'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/contact">Booking</a></li>
                </ul>
        </>

    return ( 
        <>
            <nav className='relative w-full h-fit md:px-20 px-5 py-3 bg-primary flex items-center justify-between text-white'>

                <div>
                    <h1 className='font-bold text-xl text-secondary'>INSTANT</h1>
                </div>
                <ul className='hidden md:flex md:items-center md:justify-around min-w-[60%]'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/contact">Booking</a></li>
                </ul>
                { click && SmallScreen }
                <button onClick={handleClick} className='font-bold text-xl md:hidden'>
                  { click ? <IoClose />  : <CgMenuRightAlt />}
                </button>

            </nav>
        </>
     );
}
 
export default NavBar;