import camera from '../assets/camera.png';
import hello from '../assets/security-camera.png';
import mic from '../assets/mic.png';
import questions from '../assets/questions.jpg';
import About from '../components/About';
import FAQ from '../components/FAQ';
import OfficeSpace from '../components/OfficeSpace';
import Partners from '../components/Partners';
import Footer from '../components/footer';
import OurTeam from '../components/OurTeam';
import Services from '../components/services';
import Packages from '../components/packages';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';


const Home = () => {
    return ( 
        <>
            <div className="w-full h-screen bg-homebg bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center text-white">
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
            </div>
            <div className="w-full min-h-[50vh] md:min-h-[70vh] lg:h-screen flex flex-col items-center justify-center bg-primary text-white relative">
                <img src={camera} alt="3d image of a camera" className='w-[50px] md:w-[70px] lg:w-[80px] h-auto absolute top-1 right-5 opacity-50 animate-shake' />
                <img src={hello} alt="3d image of a camera" className='w-[50px] md:w-[70px] lg:w-[80px] h-auto absolute top-1 left-3 opacity-50' />
                <img src={mic} alt="3d image of a camera" className='w-[50px] md:w-[70px] lg:w-[80px] h-auto absolute bottom-1 right-3 opacity-50' />
                <hr className="w-[30%] h-1 border-0 bg-secondary" />
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold my-10">WELCOME</h1>
                <div className="px-3 flex flex-col items-center justify-center md:w-[50%]">
                    <p className="text-sm md:text-xl text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita minima omnis tenetur ea repellat minus. Iste voluptas esse magni voluptates odio. Nihil dolores aperiam vitae obcaecati ipsa. Quod, quia dolorum!
                </p>
                </div>
                <button className="bg-transparent border-2 border-white my-5 py-4 px-6 text-white text-xs">
                    READ MORE
                </button>
            </div>
            <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-0 text-white text-center">
                    
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
                <img src={questions} alt="man standing with camera" className='w-[70%] md:w-[30vw] my-10 md:my-0 h-[40vh] md:h-[70%]' />
            </div>


            <div className='bg-primary w-full h-fit relative overflow-hidden flex flex-col justify-center'>
            <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>OUR PARTNERS</h1>
                <Partners />
            </div>
                      
            <div className="w-full min-h-fit py-20 px-10 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-center text-white bg-primary">
                <div>
                    <h3 className='text-base md:text-base font-semibold'>SUBSCRIBE TO OUR</h3>
                    <h1 className='text-3xl md:text-5xl font-bold'>NEWSLATTER</h1>
                </div>
                <form action="" className='mx-0 md:mx-5 flex items-center justify-between bg-white rounded-xl w-full md:w-fit h-[10vh] text-primary'>
                    <input type="email" name="newslatter" id="Newslatter" placeholder='Enter Your Email' className='p-3 bg-transparent outline-none w-full' />
                    <button className='h-[90%] w-fit px-5 m-1 text-white bg-primary rounded-lg cursor-pointer'><BsArrowRight className='font-bold text-xl' /></button>
                </form>
                
            </div>

            <Footer />
        </>
     );
}
 
export default Home;