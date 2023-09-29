import { CgMenuRightAlt } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';


const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    const SmallScreen =
        <>
            <ul className='absolute top-[100%] left-0 flex flex-col items-center justify-around w-screen h-[70vh] bg-primary font-bold'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Booking</a></li>
                </ul>
        </>

    return ( 
        <>
            <nav className='absolute top-0 left-0 w-full h-fit md:px-20 px-5 py-3 bg-primary flex items-center justify-between text-white'>

                <div>
                    <h1 className='font-bold text-xl text-secondary'>INSTANT</h1>
                </div>
                <ul className='hidden md:flex md:items-center md:justify-around min-w-[60%] font-bold'>
                    <li className='hover:border-x-2 hover:border-secondary hover:transition-all px-1'><a href="#">Home</a></li>
                    <li className='hover:border-x-2 hover:border-secondary hover:transition-all px-1'><a href="#">About</a></li>
                    <li className='hover:border-x-2 hover:border-secondary hover:transition-all px-1'><a href="#">Services</a></li>
                    <li className='hover:border-x-2 hover:border-secondary hover:transition-all px-1'><a href="#">Contact</a></li>
                    <li className='hover:border-x-2 hover:border-secondary hover:transition-all px-1'><a href="#">Booking</a></li>
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