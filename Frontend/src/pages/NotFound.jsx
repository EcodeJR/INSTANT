import { NavLink } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
        <div className="w-screen h-screen bg-primary text-white flex items-center justify-center flex-col">
            <h1 className="text-2xl md:text-4xl font-bold">Page Not Found</h1>
            <NavLink to='/' className='text-base md:text-xl text-red-700'>Go back</NavLink>
        </div>
        </>
     );
}
 
export default NotFound;