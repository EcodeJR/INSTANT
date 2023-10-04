const Footer = () => {
    return ( 
        <>
        <div className="w-full h-fit relative">
            <div className="w-screen h-[10vh] absolute top-[-2vh] left-0 bg-secondary rounded-t-xl z-10"></div>
            <div className="w-screen h-fit px-5 py-10 flex flex-col lg:flex-row items-center justify-start lg:justify-around bg-primary z-20 text-white rounded-t-xl absolute top-0 left-0">
                
                <div className="flex flex-col items-start lg:items-center justify-start w-full text-left lg:text-center">
                    <h1 className='font-bold text-xl md:text-2xl lg:text-3xl text-secondary py-3'>INSTANT</h1>
                    <a href="tel:07051242451">+2347051242451</a>
                    <a href="mail:emmanueldcode@gmail.com">instantphotography@gmail.com</a>
                    <p>Plot B No. 12 Kingsmen Plaza, Amadu bello way Abuja, Nigeria.</p>
                </div>
                <div className="flex flex-col items-start lg:items-center justify-start w-full my-5 lg:my-0">
                    <h1 className="font-bold text-xl py-2">LINKS</h1>
                    <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Contact us</a>
                    <a href="#">Services</a>
                    <a href="#">Gallary</a>
                </div>
                <div className="flex flex-col items-start lg:items-center justify-start w-full">
                    <h1 className="font-bold text-xl py-2">LEGAL</h1>
                    <a href="#">Policies</a>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Others</a>
                </div>
            </div>
        </div>
        </>

     );
}
 
export default Footer;