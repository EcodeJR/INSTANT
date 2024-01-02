import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {



    const [counters, setCounters] = useState([0, 0, 0]);
  const countersRefs = [useRef(null), useRef(null), useRef(null)];

  const finalValues = [70, 150, 5]; // Final values for each counter

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            let currentCount = 0;
            const countInterval = setInterval(() => {
              if (currentCount === finalValues[index]) {
                clearInterval(countInterval);
              } else {
                currentCount += 1;
                setCounters((prevCounters) => {
                  const updatedCounters = [...prevCounters];
                  updatedCounters[index] = currentCount;
                  return updatedCounters;
                });
              }
            }, 20);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    countersRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      countersRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);




    return ( 
        <>
        <div className="flex items-center justify-around flex-col md:flex-row w-full min-h-fit">
        <motion.div
        initial={{ opacity:0, x: -100 }}
        animate={{ opacity:1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='w-[80%] h-[40vh] md:h-[50vh] lg:h-[60vh] md:w-[30%] bg-aboutus bg-center bg-no-repeat bg-cover my-5 md:my-0 md:mx-5'>
                    <h1 className='font-bold text-3xl md:text-3xl lg:text-4xl'>ABOUT <br />
                     US</h1>
                </motion.div>
                <div className='w-fit md:w-[60%]'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-secondary my-5'>INSTANT PHOTOGRAPHY</h1>
                    <p className='text-gray-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus, error blanditiis ipsam quidem officia illum nemo perspiciatis quod explicabo aliquid itaque commodi at asperiores voluptatum enim ex laboriosam consequatur!</p>
                    <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, placeat labore. Consequuntur magnam vel aliquid quos quia pariatur delectus repellendus, doloremque quisquam? Eaque aliquid corporis accusantium magni repellat, omnis placeat.</p>
                    <div className='flex items-center justify-around my-7'>
                        <div><h1 className='font-bold text-3xl md:text-4xl' ref={countersRefs[0]}>{counters[0]}<span>+</span></h1><p className='text-sm text-gray-300'>CUSTOMERS</p></div>
                        <hr className='rotate-90 w-[70px] bg-white' />
                        <div><h1 className='font-bold text-3xl md:text-4xl' ref={countersRefs[1]}>{counters[1]}<span>+</span></h1><p className='text-sm text-gray-300'>PHOTOS</p></div>
                        <hr className='rotate-90 w-[70px] bg-white' />
                        <div><h1 className='font-bold text-3xl md:text-4xl' ref={countersRefs[2]}>{counters[2]}<span>+</span></h1><p className='text-sm text-gray-300'>YEARS</p></div>
                    </div>
                </div>
</div>
        </>
     );
}
 
export default About;