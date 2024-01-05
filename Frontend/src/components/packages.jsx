const Packages = () => {
    return ( <>
                <div className='flex flex-col md:flex-row items-center justify-around pt-10'>
                    <div className='w-[300px] p-10 border-[2px] border-gray-500 hover:border-secondary text-white text-center'>
                        <h1 className='font-semibold text-base md:text-xl lg:text-xl'>Video Covering</h1>
                        <h2 className='text-gray-300'>Per Hour</h2>
                        <h2 className='font-bold text-xl md:text-2xl lg:text-3xl hover:text-secondary'>$50</h2>
                    </div>
                    <div className='w-[300px] p-10 border-[2px] border-gray-500 hover:border-secondary text-white text-center my-5 md:my-0'>
                        <h1 className='font-semibold text-base md:text-xl lg:text-xl'>Studio Shoot</h1>
                        <h2 className='text-gray-300'>Per Picture</h2>
                        <h2 className='font-bold text-xl md:text-2xl lg:text-3xl hover:text-secondary'>$10</h2>
                    </div>
                    <div className='w-[300px] p-10 border-[2px] border-gray-500 hover:border-secondary text-white text-center'>
                        <h1 className='font-semibold text-base md:text-xl lg:text-xl'>Home Shoot</h1>
                        <h2 className='text-gray-300'>Per Picture</h2>
                        <h2 className='font-bold text-xl md:text-2xl lg:text-3xl hover:text-secondary'>$20</h2>
                    </div>
                </div>
    </> );
}
 
export default Packages;