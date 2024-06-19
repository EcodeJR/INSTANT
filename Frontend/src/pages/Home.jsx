// import camera from '../assets/camera.png';
// import hello from '../assets/security-camera.png';
// import mic from '../assets/mic.png';
import questions from '../assets/questions.jpg';
import About from '../components/About';
import FAQ from '../components/FAQ';
import OfficeSpace from '../components/OfficeSpace';
import Partners from '../components/Partners';
import OurTeam from '../components/OurTeam';
import Services from '../components/services';
import Packages from '../components/packages';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Newslatter from '../components/Newslatter';
import { useState } from 'react';
// import welcome1 from '../assets/welcome1.jpg';
// import welcome2 from '../assets/welcome2.jpg';
// import welcome3 from '../assets/welcome3.jpg';
// import welcome4 from '../assets/welcome4.jpg';
// import welcome5 from '../assets/welcome5.jpg';
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
    const [social, ToggleSocial ] = useState(false);

    const handleSocials = () => {
        ToggleSocial(!social);
    } 
    
    return ( 
        <>
            <div className="w-full h-screen bg-homebg bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center text-white relative">
                <hr className="w-[70%] h-1 border-0 bg-secondary" />
                <motion.div
                initial={{ opacity:0, x: 50 }}
                animate={{ opacity:1, x:0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-4xl md:text-8xl font-bold">INSTANT</h1>
                    <h2 className="text-xl md:text-3xl md:font-bold">Photo Studio</h2>
                </motion.div>
                <hr className="w-[70%] h-1 border-0 bg-secondary" />
                <div className="px-3 py-2 flex flex-col items-center justify-center md:w-[50%]">
                <motion.p
                initial={{y: 30}}
                animate={{y: 0}}
                transition={{ duration: 0.6 }}
                className="text-sm md:text-xl text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita minima omnis tenetur ea repellat minus. Iste voluptas esse magni voluptates odio. Nihil dolores aperiam vitae obcaecati ipsa. Quod, quia dolorum!
                </motion.p>
                </div>



                <div className='flex absolute bottom-10 left-5'>
                    <div className='h-[50px] w-[50px] flex items-center justify-center border-2 border-white rounded-full cursor-pointer' onClick={handleSocials}>
                        {social ? (
                            <p><IoMdClose /></p>
                        ) : (
                            <p><IoShareSocialOutline /></p>
                        )}
                        
                    </div>
                    
                        { social ? (
                            <motion.div
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{ duration: 0.6 }}
                            className='flex items-center justify-center'>
                                <p className='h-[40px] w-[40px] border-white border-2 rounded-full flex items-center justify-center mx-1 cursor-pointer'><MdOutlineFacebook /></p>
                                <p className='h-[40px] w-[40px] border-white border-2 rounded-full flex items-center justify-center mx-1 cursor-pointer'><FaSquareInstagram /></p>
                                <p className='h-[40px] w-[40px] border-white border-2 rounded-full flex items-center justify-center mx-1 cursor-pointer'><FaSquareWhatsapp /></p>
                                <p className='h-[40px] w-[40px] border-white border-2 rounded-full flex items-center justify-center mx-1 cursor-pointer'><FaXTwitter /></p>
                        </motion.div>
                        ) : (
                            null
                        )}
                        
                    

                </div>
            </div>
            <div className="w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-[70vh] bg-primary text-white relative overflow-hidden py-4">
                <div className='w-full h-full flex flex-col items-center justify-center z-30'>
                    <h4 className='text-white text-3xl md:text-5xl'>*</h4>
                    <hr className="w-[30%] h-1 border-0 bg-secondary" />
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold my-10">WELCOME</h1>
                <div className="px-3 flex flex-col items-center justify-center w-[70%] md:w-[50%]">
                    <p className="text-sm md:text-xl text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita minima omnis tenetur ea repellat minus. Iste voluptas esse magni voluptates odio. Nihil dolores aperiam vitae obcaecati ipsa. Quod, quia dolorum!
                    </p>
                </div>
                <Link to='booking' className="bg-transparent border-2 border-white my-5 py-2 md:py-4 px-4 md:px-6 text-white text-xl">
                    BOOK NOW
                </Link>
                </div>
                
            </div>
            <div className="w-full min-h-[50vh] grid grid-cols-1 md:grid-cols-2 gap-0 text-white text-center">
                    
                    <div className="flex flex-col items-center justify-center py-10 bg-camp bg-center bg-no-repeat bg-cover">
                        <hr className="w-[20%] h-1 border-0 bg-secondary" />
                        <h1 className="text-xl md:text-2xl font-bold my-5">CATALOG <br /> SHOOT</h1>
                        <hr className="w-[20%] h-1 border-0 bg-secondary" />
                    </div>

                    <div className="flex flex-col items-center justify-center py-10 bg-october bg-center bg-no-repeat bg-cover">
                        <hr className="w-[20%] h-1 border-0 bg-secondary" />
                        <h1 className="text-xl md:text-2xl font-bold my-5">SWEET <br /> OCTOBER</h1>
                        <hr className="w-[20%] h-1 border-0 bg-secondary" />
                    </div>

                    <div className="flex flex-col items-center justify-center py-10 bg-boats bg-center bg-no-repeat bg-cover">
                        <hr className="w-[20%] h-1 border-0 bg-secondary" />
                        <h1 className="text-xl md:text-2xl font-bold my-5">CRUISE <br /> WORKSHOP</h1>
                        <hr className="w-[20%] h-1 border-0 bg-secondary" />
                    </div>

                    <div className="flex flex-col items-center justify-center py-10 bg-wedding bg-center bg-no-repeat bg-cover">
                        <hr className="w-[20%] h-1 border-0 bg-secondary" />
                        <h1 className="text-xl md:text-2xl font-bold my-5">WEDDING <br /> PHOTOGRAPHY</h1>
                        <hr className="w-[20%] h-1 border-0 bg-secondary" />
                    </div>                
            </div>

            <div className='p-10 bg-primary text-white'>
                <About />
            </div>

            <div className='bg-primary w-full h-fit'>
                <OfficeSpace />
            </div>

            <div className='bg-primary w-full h-fit'>
                <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>SERVICES</h1>
                <Services />
            </div>

            <div className='bg-primary w-full h-fit'>
                <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>PACKAGES</h1>
                <Packages />
            </div>

            <div className='bg-primary w-full h-fit'>
                <OurTeam />
            </div>

            <div className='bg-primary w-full h-fit'>
                <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>TESTIMONIALS</h1>
                <div className="scrollbar-hide flex w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll scroll-smooth px-10">
                        <div className="md:1/2 h-[250px] relative aspect-[1/2] w-[90%] shrink-0 snap-start snap-always sm:w-[44%] md:w-[30%] bg-white shadow-md shadow-gray-500 mb-3 p-10">
                            <h1 className='font-bold text-xl'>Best Service</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quas nostrum distinctio doloremque itaque veritatis tenetur sequi, a amet.</p>
                            <h2 className='absolute bottom-5 left-10 font-semibold'>John Micheal</h2>
                        </div>

                        <div className="md:1/2 h-[250px] relative aspect-[1/2] w-[90%] shrink-0 snap-start snap-always sm:w-[44%] md:w-[30%] bg-white shadow-md shadow-gray-500 mb-3 p-10">
                            <h1 className='font-bold text-xl'>Best Service</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quas nostrum distinctio doloremque itaque veritatis tenetur sequi, a amet.</p>
                            <h2 className='absolute bottom-5 left-10 font-semibold'>John Micheal</h2>
                        </div>

                        <div className="md:1/2 h-[250px] relative aspect-[1/2] w-[90%] shrink-0 snap-start snap-always sm:w-[44%] md:w-[30%] bg-white shadow-md shadow-gray-500 mb-3 p-10">
                            <h1 className='font-bold text-xl'>Best Service</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quas nostrum distinctio doloremque itaque veritatis tenetur sequi, a amet.</p>
                            <h2 className='absolute bottom-5 left-10 font-semibold'>John Micheal</h2>
                        </div>

                        <div className="md:1/2 h-[250px] relative aspect-[1/2] w-[90%] shrink-0 snap-start snap-always sm:w-[44%] md:w-[30%] bg-white shadow-md shadow-gray-500 mb-3 p-10">
                            <h1 className='font-bold text-xl'>Best Service</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quas nostrum distinctio doloremque itaque veritatis tenetur sequi, a amet.</p>
                            <h2 className='absolute bottom-5 left-10 font-semibold'>John Micheal</h2>
                        </div>

                        <div className="md:1/2 h-[250px] relative aspect-[1/2] w-[90%] shrink-0 snap-start snap-always sm:w-[44%] md:w-[30%] bg-white shadow-md shadow-gray-500 mb-3 p-10">
                            <h1 className='font-bold text-xl'>Best Service</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quas nostrum distinctio doloremque itaque veritatis tenetur sequi, a amet.</p>
                            <h2 className='absolute bottom-5 left-10 font-semibold'>John Micheal</h2>
                        </div>

                        <div className="md:1/2 h-[250px] relative aspect-[1/2] w-[90%] shrink-0 snap-start snap-always sm:w-[44%] md:w-[30%] bg-white shadow-md shadow-gray-500 mb-3 p-10">
                            <h1 className='font-bold text-xl'>Best Service</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quas nostrum distinctio doloremque itaque veritatis tenetur sequi, a amet.</p>
                            <h2 className='absolute bottom-5 left-10 font-semibold'>John Micheal</h2>
                        </div>
                        


                </div>
            </div>

            <div className='bg-primary w-full h-fit flex flex-col md:flex-row items-center justify-center md:justify-around p-10'>
                <div className='px-5 w-full md:w-[50%] lg:w-[50%]'>
                    <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>FREQUENTLY ASKED QUESTIONS</h1>
                    <div className='flex flex-col items-center justify-around h-[60vh]'>
                        <FAQ />
                    </div>
                </div>
                <div className='w-[60vw] md:w-[30vw] my-10 md:my-0 h-[40vh] md:h-[70vh] relative before:absolute before:-top-5 before:-left-5 before:border-t-2 before:border-l-2 before:border-white before:h-[50px] before:w-[50px] after:absolute after:-bottom-5 after:-right-5 after:border-b-2 after:border-r-2 after:border-white after:h-[50px] after:w-[50px]'>
                    <h3 className='absolute top-2 left-2 text-white font-semibold text-2xl'>PEOPLE ALSO ASKED US...</h3>
                    <img src={questions} alt="man standing with camera" className='w-full h-full object-cover' />
                </div>
                
            </div>


            <div className='bg-primary w-full h-fit relative overflow-hidden flex flex-col justify-center'>
            <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>OUR PARTNERS</h1>
                <Partners />
            </div>
                      
            <Newslatter />
        </>
     );
}
 
export default Home;