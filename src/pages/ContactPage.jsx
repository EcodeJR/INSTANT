const ContactPage = () => {
    return ( <>
    <div className="w-full h-[70vh] flex flex-col items-center justify-center bg-contactbg bg-center bg-no-repeat bg-cover">
    <hr className="w-[70%] h-1 border-0 bg-secondary" />
                <div className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-4xl md:text-8xl font-bold text-white">CONTACT US</h1>
                </div>
                <hr className="w-[70%] h-1 border-0 bg-secondary" />
    </div>
    <div className="bg-primary lg:flex items-center justify-around p-10">
        <div className="p-5 text-white flex flex-col items-start justify-start">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl mb-5">Contact Info</h1>
            <a href="tel:07051242451">+2347051242451</a>
            <a href="mail:emmanueldcode@gmail.com">instantphotography@gmail.com</a>
            <p>Plot B No. 12 Kingsmen Plaza, Amadu bello way Abuja, Nigeria.</p>
            <div className="flex items-center justify-around">

            </div>
        </div>
        <form action="" className="w-[80%] lg:w-[40vw] h-fit backdrop-opacity-[blur(5px)] bg-bg-blur border-bg-blur flex flex-col items-center justify-center p-4 text-white">
            <input type="text" name="name" id="name" placeholder="Name" className="w-[80%] border-[1px] border-primary/50 flex items-center justify-center p-1 bg-transparent outline-none mt-2 border-secondary"/>
            <input type="email" name="email" id="email" placeholder="Email" className="w-[80%] border-[1px] border-primary/50 flex items-center justify-center p-1 bg-transparent outline-none mt-2 border-secondary"/>
            <input type="phone" name="phone" id="phone" placeholder="Phone" className="w-[80%] border-[1px] border-primary/50 flex items-center justify-center p-1 bg-transparent outline-none mt-2 border-secondary"/>
            <textarea name="message" id="message" placeholder="Message" className="w-[80%] h-[20vh] border-[1px] border-primary/50 flex items-center justify-center p-1 bg-transparent outline-none mt-2 border-secondary"></textarea>
            <button type="submit" className="bg-transparent border-2 border-secondary/50 hover:border-white font-bold hover:bg-secondary hover:text-white ease-in-out transition-all duration-75 my-5 py-3 px-6 text-white text-xs">
                SEND
            </button>
        </form>
    </div>

    </> );
}
 
export default ContactPage;