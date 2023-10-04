import camera from '../assets/camera.png';
import hello from '../assets/hello.png';
import mic from '../assets/mic.png';
import questions from '../assets/questions.jpg';
import About from './About';
import FAQ from './FAQ';
import OfficeSpace from './OfficeSpace';
import Partners from './Partners';
import Footer from './footer';


const Home = () => {
    return ( 
        <>
            <div className="w-full h-screen bg-homebg bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center text-white">
                <hr className="w-[70%] h-1 border-0 bg-secondary" />
                <div className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-4xl md:text-8xl font-bold">INSTANT</h1>
                    <h2 className="text-xl md:text-3xl md:font-bold">Photo Studio</h2>
                </div>
                <hr className="w-[70%] h-1 border-0 bg-secondary" />
                <div className="px-3 flex flex-col items-center justify-center md:w-[50%]">
                    <p className="text-sm md:text-xl text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita minima omnis tenetur ea repellat minus. Iste voluptas esse magni voluptates odio. Nihil dolores aperiam vitae obcaecati ipsa. Quod, quia dolorum!
                </p>
                </div>
            </div>
            <div className="w-full min-h-[50vh] md:min-h-[70vh] lg:h-screen flex flex-col items-center justify-center bg-primary text-white relative">
                <img src={camera} alt="3d image of a camera" className='w-[50px] md:w-[70px] lg:w-[100px] h-auto absolute top-1 right-5 opacity-50' />
                <img src={hello} alt="3d image of a camera" className='w-[50px] md:w-[70px] lg:w-[100px] h-auto absolute top-1 left-3 opacity-50' />
                <img src={mic} alt="3d image of a camera" className='w-[50px] md:w-[70px] lg:w-[100px] h-auto absolute bottom-1 right-3 opacity-50' />
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
            <div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 gap-0 text-white text-center">
                    
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

            <div className='p-10 flex items-center justify-around flex-col md:flex-row w-screen min-h-fit bg-primary text-white'>
                <About />
            </div>

            <div className='bg-primary w-screen h-fit'>
                <OfficeSpace />
            </div>

            <div className='bg-primary w-screen h-fit'>
                <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>SERVICES</h1>
                <div className='px-10 text-white'>
                    <hr className='h-[2px] bg-gray-300' />
                    <div className='flex flex-col md:flex-row items-start md:items-center justify-around py-5'>
                        <h2 className='font-bold text-xl'>01</h2>
                        <h1 className='font-bold text-xl my-5 md:my-0'>Video Covering</h1>
                        <p className='md:w-[30%] text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nisi modi nihil, porro nostrum voluptates minima sit esse? Voluptas nam quam explicabo.</p>
                    </div>
                </div>
                <div className='px-10 text-white'>
                    <hr className='h-[2px] bg-gray-300' />
                    <div className='flex flex-col md:flex-row items-start md:items-center justify-around py-5'>
                        <h2 className='font-bold text-xl'>02</h2>
                        <h1 className='font-bold text-xl my-5 md:my-0'>Photography</h1>
                        <p className='md:w-[30%] text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nisi modi nihil, porro nostrum voluptates minima sit esse? Voluptas nam quam explicabo.</p>
                    </div>
                </div>
                <div className='px-10 text-white'>
                    <hr className='h-[2px] bg-gray-300' />
                    <div className='flex flex-col md:flex-row items-start md:items-center justify-around py-5'>
                        <h2 className='font-bold text-xl'>03</h2>
                        <h1 className='font-bold text-xl my-5 md:my-0'>Home Shots</h1>
                        <p className='md:w-[30%] text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nisi modi nihil, porro nostrum voluptates minima sit esse? Voluptas nam quam explicabo.</p>
                    </div>
                </div>
            </div>

            <div className='bg-primary w-screen h-fit'>
                <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>PACKAGES</h1>
                <div className='flex flex-col md:flex-row items-center justify-around'>
                    <div className='w-[300px] p-10 border-[2px] border-gray-500 hover:border-secondary text-white text-center'>
                        <h1 className='font-semibold text-base md:text-xl lg:text-xl'>Video Covering</h1>
                        <h2 className='text-gray-300'>Per Hour</h2>
                        <h2 className='font-bold text-xl md:text-2xl lg:text-3xl hover:text-secondary'>$50</h2>
                    </div>
                    <div className='w-[300px] p-10 border-[2px] border-gray-500 hover:border-secondary text-white text-center my-5 md:my-0'>
                        <h1 className='font-semibold text-base md:text-xl lg:text-xl'>Studio Shoot</h1>
                        <h2 className='text-gray-300'>Per Picture</h2>
                        <h2 className='font-bold text-xl md:text-2xl lg:text-3xl hover:text-secondary'>$10</h2>
                    </div>
                    <div className='w-[300px] p-10 border-[2px] border-gray-500 hover:border-secondary text-white text-center'>
                        <h1 className='font-semibold text-base md:text-xl lg:text-xl'>Home Shoot</h1>
                        <h2 className='text-gray-300'>Per Picture</h2>
                        <h2 className='font-bold text-xl md:text-2xl lg:text-3xl hover:text-secondary'>$20</h2>
                    </div>
                </div>
            </div>

            <div className='bg-primary w-screen h-fit'>
                <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>OUR TEAM</h1>
                <div className='w-full flex flex-col md:flex-row items-start justify-between px-10'>
                    <p className='text-gray-300 md:w-[30%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nulla neque eveniet! Praesentium dignissimos quibusdam repellendus expedita voluptate! Culpa ratione voluptatem minus perspiciatis sint, unde quae neque facere similique vero.</p>
                    <div className='grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-2 place-items-center mx-auto my-3 md:mx-0 md:my-0'>
                        <div className='relative w-[300px] h-[300px] bg-team1 bg-center bg-no-repeat bg-cover'>
                            <div className='absolute bottom-0 left-0 w-full px-3 py-1 bg-white text-primary'>
                                <h2 className='font-bold text-xl'>JOHN DAMON</h2>
                                <p className='font-semibold'>CEO</p>
                            </div>
                        </div>
                        <div className='relative w-[300px] h-[300px] bg-team2 bg-center bg-no-repeat bg-cover'>
                            <div className='absolute bottom-0 left-0 w-full px-3 py-1 bg-white text-primary'>
                                <h2 className='font-bold text-xl'>SARAH DAMON</h2>
                                <p className='font-semibold'>ASSITANT</p>
                            </div>
                        </div>
                        <div className='relative w-[300px] h-[300px] bg-team3 bg-center bg-no-repeat bg-cover'>
                            <div className='absolute bottom-0 left-0 w-full px-3 py-1 bg-white text-primary'>
                                <h2 className='font-bold text-xl'>MIKE TUCKER</h2>
                                <p className='font-semibold'>LEAD PHOTOGRAPHER</p>
                            </div>
                        </div>
                        <div className='relative w-[300px] h-[300px] bg-team4 bg-center bg-no-repeat bg-cover'>
                            <div className='absolute bottom-0 left-0 w-full px-3 py-1 bg-white text-primary'>
                                <h2 className='font-bold text-xl'>KRISTINE LEON</h2>
                                <p className='font-semibold'>CO-LEAD PHOTOGRAPHER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-primary w-screen h-fit'>
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

            <div className='bg-primary w-screen h-fit flex flex-col md:flex-row items-center justify-center md:justify-around p-10'>
                <div className='px-5 w-full md:w-[50%] lg:w-[50%]'>
                    <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>FREQUENTLY ASKED QUESTIONS</h1>
                    <div className='flex flex-col items-center justify-around h-[60vh]'>
                        <FAQ />
                    </div>
                </div>
                <img src={questions} alt="man standing with camera" className='w-[70%] md:w-[30vw] my-10 md:my-0 h-[40vh] md:h-[70%]' />
            </div>


            <div className='bg-primary w-screen h-fit relative overflow-hidden flex flex-col justify-center'>
            <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>OUR PARTNERS</h1>
                <Partners />
            </div>
                      
            <div className="w-full min-h-screen py-10 px-2 overflow-hidden flex flex-col items-center justify-center text-white bg-primary">
                <div className="flex flex-col items-center justify-center py-10">
                    <hr className="w-[20%] h-1 border-0 bg-secondary" />
                    <h1 className="text-4xl md:text-6xl font-bold my-3">CONTACT US</h1>
                </div>
                <form action="" method="post" className="h-full w-full flex flex-col items-center justify-around md:w-[70%]">
                    <input type="text" name="name" id="name" placeholder="Name" className="border-b-2 border-secondary w-full flex items-center justify-center p-1 bg-transparent outline-none"/>
                    <input type="email" name="email" id="email" placeholder="Email" className="border-b-2 border-secondary w-full flex items-center justify-center p-1 bg-transparent outline-none"/>
                    <input type="phone" name="phone" id="phone" placeholder="Phone" className="border-b-2 border-secondary w-full flex items-center justify-center p-1 bg-transparent outline-none"/>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" className="border-b-2 border-secondary w-full flex items-center justify-center p-1 bg-transparent outline-none"></textarea>
                    <button type="submit" className="bg-transparent border-2 border-white my-5 py-3 px-6 text-white text-xs">
                        SEND
                    </button>
                </form>
            </div>

            <Footer />
        </>
     );
}
 
export default Home;