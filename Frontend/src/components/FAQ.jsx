import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const FAQ = () => {
  const [showText, setShowText] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };
  const handleBtn = () => {
    setShowBtn(!showBtn);
  };

  const [showText1, setShowText1] = useState(false);
  const [showBtn1, setShowBtn1] = useState(false);

  const handleClick1 = () => {
    setShowText1(!showText1);
  };
  const handleBtn1 = () => {
    setShowBtn1(!showBtn1);
  };

  const [showText2, setShowText2] = useState(false);
  const [showBtn2, setShowBtn2] = useState(false);

  const handleClick2 = () => {
    setShowText2(!showText2);
  };
  const handleBtn2 = () => {
    setShowBtn2(!showBtn2);
  };

  const [showText3, setShowText3] = useState(false);
  const [showBtn3, setShowBtn3] = useState(false);

  const handleClick3 = () => {
    setShowText3(!showText3);
  };
  const handleBtn3 = () => {
    setShowBtn3(!showBtn3);
  };

  const [showText4, setShowText4] = useState(false);
  const [showBtn4, setShowBtn4] = useState(false);

  const handleClick4 = () => {
    setShowText4(!showText4);
  };
  const handleBtn4 = () => {
    setShowBtn4(!showBtn4);
  };

  return (
    <>
        <div className='w-full'>
            <div className='flex items-center justify-between text-white text-xl md:text-2xl lg:text-2xl'><h1>Hide and Display Text</h1><button onClick={handleClick}>{showBtn ? <IoIosArrowUp onClick={handleBtn} /> : <IoIosArrowDown onClick={handleBtn} />}</button></div>
            {showText && <p className='text-gray-300 text-xl'>This is the text that is hidden and displayed.</p>}
            <hr className='w-full' />
        </div>
        <div className='w-full'>
            <div className='flex items-center justify-between text-white text-xl md:text-2xl lg:text-2xl'><h1>Hide and Display Text</h1><button onClick={handleClick1}>{showBtn1 ? <IoIosArrowUp onClick={handleBtn1} /> : <IoIosArrowDown onClick={handleBtn1} />}</button></div>
            {showText1 && <p className='text-gray-300 text-xl'>This is the text that is hidden and displayed.</p>}
            <hr className='w-full' />
        </div>
        <div className='w-full'>
            <div className='flex items-center justify-between text-white text-xl md:text-2xl lg:text-2xl'><h1>Hide and Display Text</h1><button onClick={handleClick2}>{showBtn2 ? <IoIosArrowUp onClick={handleBtn2} /> : <IoIosArrowDown onClick={handleBtn2} />}</button></div>
            {showText2 && <p className='text-gray-300 text-xl'>This is the text that is hidden and displayed.</p>}
            <hr className='w-full' />
        </div>
        <div className='w-full'>
            <div className='flex items-center justify-between text-white text-xl md:text-2xl lg:text-2xl'><h1>Hide and Display Text</h1><button onClick={handleClick3}>{showBtn3 ? <IoIosArrowUp onClick={handleBtn3} /> : <IoIosArrowDown onClick={handleBtn3} />}</button></div>
            {showText3 && <p className='text-gray-300 text-xl'>This is the text that is hidden and displayed.</p>}
            <hr className='w-full' />
        </div>
        <div className='w-full'>
            <div className='flex items-center justify-between text-white text-xl md:text-2xl lg:text-2xl'><h1>Hide and Display Text</h1><button onClick={handleClick4}>{showBtn4 ? <IoIosArrowUp onClick={handleBtn4} /> : <IoIosArrowDown onClick={handleBtn4} />}</button></div>
            {showText4 && <p className='text-gray-300 text-xl'>This is the text that is hidden and displayed.</p>}
            <hr className='w-full' />
        </div>
        
    </>
  );
};

export default FAQ;