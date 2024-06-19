import { useState } from 'react';
import axios from 'axios';
import { BsArrowRight } from 'react-icons/bs';
// import Popup from './Popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Newslatter() {
  const [email, setEmail] = useState('');
  // const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://instant-api-eight.vercel.app/api/subscribe', { email });
      toast.success("Email successfully submitted!");
      // setShowPopup(true);
      setEmail('');
    } catch (error) {
      console.log("You shouldn't be here buddy! But since you are message me on twitter @EcodeJR let's connect. :)");
      console.log('Error subscribing:', error.message);
      if (error.response.status == 400) {
        toast.error("Email already exist")
      }else{
        toast.error("Network Error, Please try again.");
      }
      
      // alert('Subscription failed. Please try again.');
    }
    };

    // const closePopup = () => {
    //   setShowPopup(false);
    // };


    return (
      <>
      <ToastContainer />
      {/* <Popup
        show={showPopup}
        message="Email successfully submitted!"
        onClose={closePopup}
      /> */}
    <div className="w-full min-h-fit py-20 px-10 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-center text-white bg-primary">
                <div>
                    <h3 className='text-base md:text-base font-semibold'>SUBSCRIBE TO OUR</h3>
                    <h1 className='text-3xl md:text-5xl font-bold'>NEWSLATTER</h1>
                </div>
                <form onSubmit={handleSubmit} className='mx-0 md:mx-5 flex items-center justify-between bg-white rounded-xl w-full md:w-fit h-[10vh] text-primary'>
                    <input type="email" name="newslatter" id="Newslatter" placeholder='Enter Your Email' className='p-3 bg-transparent outline-none w-full' value={email}
        onChange={e => setEmail(e.target.value)}
        required />
                    <button type="submit" className='h-[90%] w-fit px-5 m-1 text-white bg-primary rounded-lg cursor-pointer'><BsArrowRight className='font-bold text-xl' /></button>
                </form>
                
            </div>
            </>
            );
}
 
export default Newslatter;