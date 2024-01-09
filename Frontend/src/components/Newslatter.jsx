import { useState } from 'react';
import axios from 'axios';
import { BsArrowRight } from 'react-icons/bs';

function Newslatter() {
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/subscribe', { email });
      alert('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error.message);
      alert('Subscription failed. Please try again.');
    }
    };



    return (
    <div className="w-full min-h-fit py-20 px-10 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-center text-white bg-primary">
                <div>
                    <h3 className='text-base md:text-base font-semibold'>SUBSCRIBE TO OUR</h3>
                    <h1 className='text-3xl md:text-5xl font-bold'>NEWSLATTER</h1>
                </div>
                <form onSubmit={handleSubmit} className='mx-0 md:mx-5 flex items-center justify-between bg-white rounded-xl w-full md:w-fit h-[10vh] text-primary'>
                    <input type="email" name="newslatter" id="Newslatter" placeholder='Enter Your Email' className='p-3 bg-transparent outline-none w-full' value={email}
        onChange={e => setEmail(e.target.value)}
        required />
                    <button type='submit' className='h-[90%] w-fit px-5 m-1 text-white bg-primary rounded-lg cursor-pointer'><BsArrowRight className='font-bold text-xl' /></button>
                </form>
                
            </div>
            );
}
 
export default Newslatter;