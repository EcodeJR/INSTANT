import { CgMenuRightAlt } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';




const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const variants = {
        open: { x: 0 },
        closed: { x: "-100%" }
    }
    
    const [Links, setLinks] = useState([
        {id: 1, name: 'Home', value: '/', style: 'text-2xl uppercase'},
        {id: 2, name: 'About', value: 'about', style: 'text-2xl uppercase'},
        {id: 3, name: 'Services', value: 'services', style: 'text-2xl uppercase'},
        {id: 4, name: 'Contact', value: 'contact', style: 'text-2xl uppercase'},
        {id: 5, name: 'Gallery', value: 'gallary', style: 'text-2xl uppercase'},
        {id: 6, name: 'Book', value: 'booking', style: 'text-2xl uppercase px-3 py-3 relative after:absolute after:top-0 after:right-0 after:border-[1px] after:border-l-0 after:border-white after:h-full after:w-[15px] before:absolute before:top-0 before:left-0 before:border-[1px] before:border-r-0 before:border-white before:h-full before:w-[15px]'},
      ]);


    const SmallScreen =
        <>
            <motion.div
            initial='closed'
            animate={click ? "open" : "closed"}
            variants={variants}
            transition={{when: 'beforeChildren'}}
            className='absolute z-20 top-[100%] right-0 flex flex-col items-start justify-around w-[70vw] min-h-[70vh] border-b-8 border-b-secondary shadow-lg bg-primary/90 font-bold py-20 px-5'>
                {Links.map(link => (
                    <motion.span
                    initial={{ opacity:0, x:'-100px'}}
                    animate={{ opacity:1, x:0 }}
                    transition={{delay: 0.3}}
                    key={link.id}>
                        <NavLink
                        to={link.value} className={link.style}>{link.name}</NavLink>
                    </motion.span>
                    
                ))}
            </motion.div>
        </>
        const filteredLinks = Links.filter(link => link.id !== 6); // Excluding link with ID 6(Book)

        // Render Desktop NavLink components for the filtered links
        const renderedLinks = filteredLinks.map(link => (
          <NavLink key={link.id} to={link.value} className={({ isActive }) => {
            return 'relative px-3 py-1 hover:before:h-[5px] hover:before:w-[5px] hover:before:absolute hover:before:bottom-0 hover:before:right-0 hover:before:border-white hover:before:border-b-[1px] hover:before:border-r-[1px] hover:after:h-[5px] hover:after:w-[5px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:border-white hover:after:border-b-[1px] hover:after:border-l-[1px] transition-all ease-in-out' + (isActive ? "font-bold text-white bg-white/20 rounded-md hover:before:border-none hover:after:border-none" : "");
          }}>
            {link.name}
          </NavLink>
        ));

    return ( 
        <>
            <nav className='absolute z-20 w-full h-fit md:px-10 px-5 py-3 bg-bg-blur backdrop-blur-xl flex items-center justify-between text-white'>

                <div>
                    <h1 className='font-bold text-3xl md:text-3xl lg:text-4xl text-secondary'>INSTANT</h1>
                </div>
                <motion.div
                initial={{ y:-20}}
                animate={{ y: 0}}
                transition={{delay:0.6}}
                className='hidden md:flex md:items-center md:justify-between min-w-[60%] font-bold'>
                    <div>
                    {renderedLinks}
                    </div>
                    
                    <div>
                        <NavLink to="booking" className='px-3 py-2 relative after:absolute after:top-0 after:right-0 after:border-[1px] after:border-l-0 after:border-white after:h-full after:w-[15px] before:absolute before:top-0 before:left-0 before:border-[1px] before:border-r-0 before:border-white before:h-full before:w-[15px]'>Book</NavLink>
                    </div>
                    
                </motion.div>
                { click && SmallScreen }
                <button onClick={handleClick} className='font-bold text-xl md:hidden'>
                  { click ? <IoClose className='text-3xl' />  : <CgMenuRightAlt className='text-3xl' />}
                </button>

            </nav>
        </>
     );
}
 
export default NavBar;