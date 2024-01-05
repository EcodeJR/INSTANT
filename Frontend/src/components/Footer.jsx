import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <>
        <div className="w-full h-fit relative">
            <div className="w-screen h-[10vh] absolute top-[-2vh] left-0 bg-secondary rounded-t-xl z-10"></div>
            <div className="w-screen h-fit px-5 py-10 flex flex-col lg:flex-row items-center justify-start lg:justify-around bg-primary z-20 text-white rounded-t-xl absolute top-0 left-0">
                
                <div className="flex flex-col items-start justify-start w-full text-left mx-4">
                    <h1 className='font-bold text-xl md:text-2xl lg:text-3xl text-secondary py-3'>INSTANT</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quia, earum nobis, quo, sapiente ullam nulla at nisi ipsum deleniti nam a ea adipisci debitis quod rerum nostrum non sit!</p>
                </div>
                <div className="flex flex-col items-start justify-start w-full my-5 mx-4 lg:my-0">
                    <h1 className="font-bold text-xl py-2">SOCIALS</h1>
                    <a href="tel:07051242451">+2347051242451</a>
                    <a href="mail:emmanueldcode@gmail.com">instantphotography@gmail.com</a>
                    <p>Plot B No. 12 Kingsmen Plaza, Amadu bello way Abuja, Nigeria.</p>
                </div>
                <div className="flex flex-col items-start justify-start w-full my-5 mx-4 lg:my-0">
                    <h1 className="font-bold text-xl py-2">LINKS</h1>
                    <Link to='/'>Home</Link>
                    <Link to='about'>About us</Link>
                    <Link to='contact'>Contact us</Link>
                    <Link to='services'>Services</Link>
                    <Link to='gallary'>Gallary</Link>
                </div>
                <div className="flex flex-col items-start justify-start w-full mx-4">
                    <h1 className="font-bold text-xl py-2">LEGAL</h1>
                    <Link to="policies">Policies</Link>
                    <Link to="terms">Terms and Conditions</Link>
                    <Link to="terms">Others</Link>
                </div>
            </div>
        </div>
        </>

     );
}
 
export default Footer;