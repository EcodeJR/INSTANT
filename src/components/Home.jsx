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
            <div className="w-full min-h-[50vh] md:min-h-[70vh] lg:h-screen flex flex-col items-center justify-center bg-primary text-white">
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
        </>
     );
}
 
export default Home;