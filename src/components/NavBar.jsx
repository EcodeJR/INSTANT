import { CgMenuRightAlt } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import { NavLink } from "react-router-dom";


const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    const SmallScreen =
        <>
            <div className='absolute top-[100%] left-0 flex flex-col items-center justify-around w-screen min-h-[70vh] bg-primary font-bold'>
                    <NavLink to='/' className='text-2xl uppercase'>Home</NavLink>
                    <NavLink to="about" className='text-2xl uppercase'>About</NavLink>
                    <NavLink to="services" className='text-2xl uppercase'>Services</NavLink>
                    <NavLink to="contact" className='text-2xl uppercase'>Contact</NavLink>
                    <NavLink to="gallary" className='text-2xl uppercase'>Gallary</NavLink>
                    <NavLink to="booking" className='text-2xl uppercase px-3 py-3 border-[1px] border-white'>Book</NavLink>
            </div>
        </>

    return ( 
        <>
            <nav className='relative w-full h-fit md:px-10 px-5 py-3 bg-primary flex items-center justify-between text-white'>

                <div>
                    <h1 className='font-bold text-3xl md:text-3xl lg:text-4xl text-secondary'>INSTANT</h1>
                </div>
                <div className='hidden md:flex md:items-center md:justify-between min-w-[60%] font-bold'>
                    <div>
                        <NavLink to='/' className='px-3'>Home</NavLink>
                        <NavLink to="about" className='px-3'>About</NavLink>
                        <NavLink to="services" className='px-3'>Services</NavLink>
                        <NavLink to="contact" className='px-3'>Contact</NavLink>
                        <NavLink to="gallary" className='px-3'>Gallary</NavLink>
                    </div>
                    
                    <div>
                        <NavLink to="booking" className='px-3 py-2 border-[1px] border-white'>Book</NavLink>
                    </div>
                    
                </div>
                { click && SmallScreen }
                <button onClick={handleClick} className='font-bold text-xl md:hidden'>
                  { click ? <IoClose className='text-3xl' />  : <CgMenuRightAlt className='text-3xl' />}
                </button>

            </nav>
        </>
     );
}
 
export default NavBar;