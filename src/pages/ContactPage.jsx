import { AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import Footer from '../components/footer';

const ContactPage = () => {
    return ( <>
    <div className="w-full h-[70vh] flex flex-col items-center justify-center bg-contactbg bg-center bg-no-repeat bg-cover">
    <hr className="w-[70%] h-1 border-0 bg-secondary" />
                <div className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-4xl md:text-8xl font-bold text-white">CONTACT US</h1>
                </div>
                <hr className="w-[70%] h-1 border-0 bg-secondary" />
    </div>
        <div className="relative text-primary bg-white flex flex-col lg:flex-row items-center justify-center">
            <div className='h-[50px] w-[50px] bg-transparent border-2 border-primary absolute animate-shake top-5 left-5'></div>
            <div className="h-[100px] w-full lg:h-full lg:w-[200px] bg-secondary absolute lg:top-0 bottom-0 right-0"></div>
            <div className="flex flex-col items-center justify-center px-20 py-10 w-full">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl mb-5">Contact Info</h1>
                <p className='text-lg'>Feel free to contact us about your complaints or questions. <br />We are available 24/7.</p>
                <form action="" className="w-full h-fit flex flex-col items-center justify-center p-4 text-primary">
                    <input type="text" name="name" id="name" placeholder="Name" className="w-full border-b-2 border-primary/60 p-3 outline-none"/>
                    <input type="email" name="email" id="email" placeholder="Email" className="w-full border-b-2 border-primary/60 p-3 outline-none"/>
                    <input type="phone" name="phone" id="phone" placeholder="Phone" className="w-full border-b-2 border-primary/60 p-3 outline-none"/>
                    <textarea name="message" id="message" placeholder="Message" className="w-full border-b-2 border-primary/60 p-3 outline-none"></textarea>
                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 duration-75 ease-in-out transition-all my-5 py-3 px-6 text-white text-xs">
                        SEND
                    </button>
                </form>
            </div>
            <div className="w-full h-full relative">
                <div className="flex flex-col items-start justify-center text-white bg-primary h-[30vh] lg:h-[60vh] w-fit lg:w-[40vw] relative lg:absolute right-0 top-[50%] lg:translate-y-[-50%] m-10 md:mx-auto lg:m-0 p-10">
                    <div className="absolute w-[50px] h-[50px] bg-secondary -top-5 -left-5"></div>
                    <h2 className="font-bold text-2xl md:text-3xl">Info</h2>
                    <a href="tel:07051242451" className='flex items-center justify-center my-2'><AiOutlinePhone className='font-bold text-xl text-white/50 mx-2' /> +2347051242451</a>
                    <a href="mail:emmanueldcode@gmail.com" className='flex items-center justify-center my-2'><HiOutlineMail className='font-bold text-xl text-white/50 mx-2' /> instantphotography@gmail.com</a>
                    <p className='flex items-center justify-center my-2'><AiOutlineHome className='font-bold text-xl text-white/50 mx-2' /> Plot B No. 12 Kingsmen Plaza, Abuja.</p>
                </div>
            </div>
        </div>
        <Footer />

    </> );
}
 
export default ContactPage;