import Footer from '../components/footer';

const BookingPage = () => {
    return ( <>
    <div className="w-screen min-h-screen bg-primary flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[50vw] h-full flex flex-col items-center justify-center pt-[10vh]">
            <h1 className="font-bold text-white text-2xl uppercase">Booking</h1>
            <form action="POST" method="post" className="flex flex-wrap items-center justify-center flex-col">
                <label htmlFor="name" className="font-semibold text-sm text-white/60 mt-2">Name:</label>
                <input type="text" name="name" id="name" placeholder="Enter Your Name...." className="w-[80%] lg:w-[40vw] h-[10vh] p-3 outline-none flex-1" />
                <label htmlFor="phone" className="font-semibold text-sm text-white/60 mt-2">Phone Number:</label>
                <input type="number" name="phone" id="phone" placeholder="Enter Your phone number...." className="w-[80%] lg:w-[40vw] h-[10vh] p-3 outline-none flex-1" />
                <label htmlFor="email" className="font-semibold text-sm text-white/60 mt-2">Email:</label>
                <input type="email" name="email" id="email" placeholder="Enter Your Email...." className="w-[80%] lg:w-[40vw] h-[10vh] p-3 outline-none flex-1" />
                <div className="flex items-end justify-end w-[80%] lg:w-[40vw] flex-1">
                    <div className="h-fit w-fit">
                        <label htmlFor="session" className="font-semibold text-sm text-white/60 mt-2">How would you like your session:</label>
                        <select name="session" id="session" className="w-[50vw] lg:w-[25vw] lg:h-[10vh] p-3 flex-1 outline-none">
                            <option value="home">Home</option>
                            <option value="studio">Studio</option>
                        </select>
                    </div>
                    <div className="h-fit w-fit">
                        <label htmlFor="date" className="font-semibold text-sm text-white/60 mt-2">Shooting Location:</label>
                        <input type="date" name="date" id="date"  className="w-[30vw] lg:w-[15vw] lg:h-[10vh] p-3 flex-1 outline-none"/>
                    </div>
                </div>
                <input type="submit" value="Book Now" className="p-2 bg-secondary text-white font-bold cursor-pointer mt-3" />

            </form>
        </div>
        <div className="w-full lg:w-[40vw] h-[40vh] lg:h-screen md:hidden lg:block bg-homebg bg-cover bg-no-repeat clipped-polygon block mt-2">

        </div>
    </div>
    <Footer />
    </> );
}
 
export default BookingPage;