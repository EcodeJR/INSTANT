const OurTeam = () => {
    return ( 
        <>
            <h1 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl p-10'>OUR TEAM</h1>
                <div className='w-full flex flex-col md:flex-row items-start justify-between px-10'>
                    <p className='text-gray-300 md:w-[30%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nulla neque eveniet! Praesentium dignissimos quibusdam repellendus expedita voluptate! Culpa ratione voluptatem minus perspiciatis sint, unde quae neque facere similique vero.</p>
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