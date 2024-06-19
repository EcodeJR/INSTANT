import SonyLogo from '../assets/SonyLogo.png';
import nikonLogo from '../assets/nikonLogo.png';
import camonLogo from '../assets/camonLogo.png';
import hasselbladLogo from '../assets/hasselbladLogo.png';
import konicaLogo from '../assets/konicaLogo.png';
import logo1 from '../assets/logo1.jpg';
import logo2 from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.jpg';
import logo4 from '../assets/logo4.jpg';
import logo5 from '../assets/logo5.jpg';

const Partners = () => {
    return ( 
        <>
            <div className="pointer-events-none relative flex gap-10 overflow-hidden">
                <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10">
                <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-fit shadow-md" src={SonyLogo} alt="" />
                <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={nikonLogo} alt="" />
                <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-fit shadow-md" src={camonLogo} alt="" />
                <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={hasselbladLogo} alt="" />
                <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={konicaLogo} alt="" />
                </div>
                <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10">
                <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={logo1} alt="" />
                <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={logo2} alt="" />
                <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={logo3} alt="" />
                <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={logo4} alt="" />
                <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={logo5} alt="" />
                </div>
            </div>
            
        </>
     );
}
 
export default Partners;