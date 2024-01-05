import { motion } from 'framer-motion';
const GallaryPage = () => {
    return ( 
        <>
            <div className="w-full h-screen flex flex-col items-center justify-center bg-gallarybg bg-center bg-no-repeat bg-cover">
                <hr className="w-[70%] h-1 border-0 bg-secondary" />
                <motion.div
                initial={{ opacity:0, x: 50 }}
                animate={{ opacity:1, x:0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-4xl md:text-8xl font-bold text-white">GALLARY</h1>
                </motion.div>
                <hr className="w-[70%] h-1 border-0 bg-secondary" />
    </div>
        </>
     );
}
 
export default GallaryPage;