import Footer from "../components/footer";
import Packages from "../components/packages";
import Services from "../components/services";

const ServicesPage = () => {
    return ( <>
    <div className="w-full h-screen flex flex-col items-center justify-center bg-servicesbg bg-center bg-no-repeat bg-cover">
    <hr className="w-[70%] h-1 border-0 bg-secondary" />
                <div className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-4xl md:text-8xl font-bold text-white">OUR SERVICES</h1>
                </div>
                <hr className="w-[70%] h-1 border-0 bg-secondary" />
    </div>
    <div className="bg-primary w-full h-fit py-10">
        <Services />
        <Packages />
    </div>
    <Footer />
    </> );
}
 
export default ServicesPage;