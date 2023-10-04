const About = () => {
    return ( 
        <>
        
        <div className='w-[80%] h-[40vh] md:h-[50vh] lg:h-[60vh] md:w-[30%] bg-aboutus bg-center bg-no-repeat bg-cover my-5 md:my-0 md:mx-5'>
                    <h1 className='font-bold text-3xl md:text-3xl lg:text-4xl'>ABOUT <br />
                     US</h1>
                </div>
                <div className='w-fit md:w-[60%]'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-secondary my-5'>INSTANT PHOTOGRAPHY</h1>
                    <p className='text-gray-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus, error blanditiis ipsam quidem officia illum nemo perspiciatis quod explicabo aliquid itaque commodi at asperiores voluptatum enim ex laboriosam consequatur!</p>
                    <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, placeat labore. Consequuntur magnam vel aliquid quos quia pariatur delectus repellendus, doloremque quisquam? Eaque aliquid corporis accusantium magni repellat, omnis placeat.</p>
                    <div className='flex items-center justify-around my-7'>
                        <div><h1 className='font-bold text-3xl md:text-4xl'>100<span>+</span></h1><p className='text-sm text-gray-300'>CUSTOMERS</p></div>
                        <hr className='rotate-90 w-[70px] bg-white' />
                        <div><h1 className='font-bold text-3xl md:text-4xl'>500<span>+</span></h1><p className='text-sm text-gray-300'>PHOTOS</p></div>
                        <hr className='rotate-90 w-[70px] bg-white' />
                        <div><h1 className='font-bold text-3xl md:text-4xl'>10<span>+</span></h1><p className='text-sm text-gray-300'>YEARS</p></div>
                    </div>
                </div>

        </>
     );
}
 
export default About;