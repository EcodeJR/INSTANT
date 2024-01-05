const OurTeam = () => {
    return ( 
        <>
            <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>OUR TEAM</h1>
                <div className='w-full flex flex-col md:flex-row items-start justify-between px-10'>
                    <div className="w-full py-5 px-3 md:px-10">
                        <p className='text-gray-300 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nulla neque eveniet! Praesentium dignissimos quibusdam repellendus expedita voluptate! Culpa ratione voluptatem minus perspiciatis sint, unde quae neque facere similique vero.</p>


                        <div className="py-10">
                            <div className="h-fit">
                                <div className="flex items-start">
                                    <div className="w-[30px] h-[30px] rounded-full bg-secondary text-white flex items-center justify-center p-5">
                                        <h3 className="font-bold text-xl">01</h3>
                                    </div>
                                    <h2 className="font-semibold text-2xl text-white px-5">ACCOUNTABLE</h2>
                                </div>
                                <div className="h-[20vh] px-5 md:px-5 py-1 flex items-start justify-start">
                                    <hr className="w-[10px] min-h-[100%] border-0 bg-secondary translate-y-0" />
                                    <p className="pl-10 md:pl-5 text-justify  text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolore blanditiis quo quam atque architecto temporibus repellendus, error</p>
                                </div>
                            </div>
                            <div className="h-fit">
                                <div className="flex items-start">
                                    <div className="w-[30px] h-[30px] rounded-full bg-secondary text-white flex items-center justify-center p-5">
                                        <h3 className="font-bold text-xl">02</h3>
                                    </div>
                                    <h2 className="font-semibold text-2xl text-white px-5">CREDIBLE</h2>
                                </div>
                                <div className="h-[20vh] px-5 md:px-5 py-1 flex items-start justify-start">
                                    <hr className="w-[10px] min-h-[100%] border-0 bg-secondary translate-y-0" />
                                    <p className="pl-10 md:pl-5 text-justify text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolore blanditiis quo quam atque architecto temporibus repellendus, error</p>
                                </div>
                            </div>
                            <div className="h-fit">
                                <div className="flex items-start">
                                    <div className="w-[30px] h-[30px] rounded-full bg-secondary text-white flex items-center justify-center p-5">
                                        <h3 className="font-bold text-xl">03</h3>
                                    </div>
                                    <h2 className="font-semibold text-2xl text-white px-5">PROFESSIONAL</h2>
                                </div>
                                <div className="h-[20vh] px-5 md:px-5 py-1 flex items-start justify-start">
                                    <hr className="w-[10px] min-h-[100%] border-0 bg-secondary translate-y-0" />
                                    <p className="pl-10 md:pl-5 text-justify text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolore blanditiis quo quam atque architecto temporibus repellendus, error</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-2 place-items-center mx-auto my-3 md:mx-0 md:my-0'>
                        <div className='relative w-[300px] h-[300px] bg-team1 bg-center bg-no-repeat bg-cover'>
                            <div className='absolute bottom-0 left-0 w-full px-3 py-1 bg-white text-primary'>
                                <h2 className='font-bold text-xl'>JOHN DAMON</h2>
                                <p className='font-semibold'>CEO</p>
                            </div>
                        </div>
                        <div className='relative w-[300px] h-[300px] bg-team2 bg-center bg-no-repeat bg-cover'>
                            <div className='absolute bottom-0 left-0 w-full px-3 py-1 bg-white text-primary'>
                                <h2 className='font-bold text-xl'>SARAH DAMON</h2>
                                <p className='font-semibold'>ASSITANT</p>
                            </div>
                        </div>
                        <div className='relative w-[300px] h-[300px] bg-team3 bg-center bg-no-repeat bg-cover'>
                            <div className='absolute bottom-0 left-0 w-full px-3 py-1 bg-white text-primary'>
                                <h2 className='font-bold text-xl'>MIKE TUCKER</h2>
                                <p className='font-semibold'>LEAD PHOTOGRAPHER</p>
                            </div>
                        </div>
                        <div className='relative w-[300px] h-[300px] bg-team4 bg-center bg-no-repeat bg-cover'>
                            <div className='absolute bottom-0 left-0 w-full px-3 py-1 bg-white text-primary'>
                                <h2 className='font-bold text-xl'>KRISTINE LEON</h2>
                                <p className='font-semibold'>CO-LEAD PHOTOGRAPHER</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
     );
}
 
export default OurTeam;