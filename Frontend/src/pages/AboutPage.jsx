import About from "../components/About";
import OurTeam from "../components/OurTeam";
import { motion } from 'framer-motion';

const AboutPage = () => {
    return ( <>
        <div className="w-full h-screen flex flex-col items-center justify-center bg-aboutbg bg-center bg-no-repeat bg-cover">
            <hr className="w-[70%] h-1 border-0 bg-secondary" />
            <motion.div
            initial={{ opacity:0, x: 50 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center py-10">
                <h1 className="text-4xl md:text-8xl font-bold text-white">ABOUT US</h1>
            </motion.div>
            <hr className="w-[70%] h-1 border-0 bg-secondary" />
        </div>
        <div className="bg-primary text-white px-10 py-5 h-fit">
            <About />
            <OurTeam />
        </div>
    </> );
}
 
export default AboutPage;