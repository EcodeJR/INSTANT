import office1 from '../assets/office1.jpg';
import office2 from '../assets/office2.jpg';
import office3 from '../assets/office3.jpg';
import office4 from '../assets/office4.jpg';
import office5 from '../assets/office5.jpg';
import office6 from '../assets/office6.jpg';

const OfficeSpace = () => {
    return ( 
        <>
        
        <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-5'>OUR OFFICE SPACE</h1>
                    <div className="scrollbar-hide flex w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll scroll-smooth px-10 pb-5">
                        <div className="md:2/3 h-[40vh] md:h-[70vh] relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]">
                            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">Indonesia</h2>
                            <p className="text-sm text-white/50">Studio</p>
                            </div>
                            <img src={office1} alt="image" className="h-full w-full rounded-xl object-cover" />
                        </div>

                        <div className="md:2/3 h-[40vh] md:h-[70vh] relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]">
                            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">New York</h2>
                            <p className="text-sm text-white/50">Studio</p>
                            </div>
                            <img src={office2} className="h-full w-full rounded-xl object-cover" />
                        </div>

                        <div className="md:2/3 h-[40vh] md:h-[70vh] relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-blue-100 sm:w-[44%] md:w-[30%]">
                            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">London</h2>
                            <p className="text-sm text-white/50">Studio</p>
                            </div>
                            <img src={office3} className="h-full w-full rounded-xl object-cover" />
                        </div>

                        <div className="md:2/3 h-[40vh] md:h-[70vh] relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-green-100 sm:w-[44%] md:w-[30%]">
                            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">USA</h2>
                            <p className="text-sm text-white/50">Studio</p>
                            </div>
                            <img src={office4} className="h-full w-full rounded-xl object-cover" />
                        </div>

                        <div className="md:2/3 h-[40vh] md:h-[70vh] relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-rose-100 sm:w-[44%] md:w-[30%]">
                            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">Singapore</h2>
                            <p className="text-sm text-white/50">Studio</p>
                            </div>
                            <img src={office5} className="h-full w-full rounded-xl object-cover" />
                        </div>

                        <div className="md:2/3 h-[40vh] md:h-[70vh] relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-yellow-100 sm:w-[44%] md:w-[30%]">
                            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">Bangkok</h2>
                            <p className="text-sm text-white/50">Studio</p>
                            </div>
                            <img src={office6} className="h-full w-full rounded-xl object-cover" />
                        </div>
                </div>

        </>

     );
}
 
export default OfficeSpace;