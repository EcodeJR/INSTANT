import About from "../components/About";
import OurTeam from "../components/OurTeam";
import Footer from "../components/footer";

const AboutPage = () => {
    return ( <>
        <div className="w-full h-[70vh] flex flex-col items-center justify-center bg-aboutbg bg-center bg-no-repeat bg-cover">
            <hr className="w-[70%] h-1 border-0 bg-secondary" />
            <div className="flex flex-col items-center justify-center py-10">
                <h1 className="text-4xl md:text-8xl font-bold text-white">ABOUT US</h1>
            </div>
            <hr className="w-[70%] h-1 border-0 bg-secondary" />
        </div>
        <div className="bg-primary text-white p-10">
            <About />
            <OurTeam />
        </div>
        <Footer />
    </> );
}
 
export default AboutPage;