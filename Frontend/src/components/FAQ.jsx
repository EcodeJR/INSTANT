import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const questions = [{
    id: 1,
    q1: 'What is the cost of a membership?',
    t1: 'Our memberships are priced at $25 per month. You'
  },
  {
    id: 2,
    q1: 'What is the cost of a membership?',
    t1: 'Our memberships are priced at $25 per month. You'
  },
  {
    id: 3,
    q1: 'What is the cost of a membership?',
    t1: 'Our memberships are priced at $25 per month. You'
  },
  {
    id: 4,
    q1: 'What is the cost of a membership?',
    t1: 'Our memberships are priced at $25 per month. You'
  },
  {
    id: 5,
    q1: 'What is the cost of a membership?',
    t1: 'Our memberships are priced at $25 per month. You'
  },
]

const handleClick = (id) => {
  setOpenQuestion((prevOpenQuestion) => (prevOpenQuestion === id ? null : id));
};


  return (
    <>
      {questions.map((ques) => (
        <div className='w-full' key={ques.id}>
          <div className='flex items-center justify-between text-white text-xl md:text-2xl lg:text-2xl'>
            <h1>{ques.q1}</h1>
            <button onClick={() => handleClick(ques.id)}>
              {openQuestion === ques.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          {openQuestion === ques.id && <p className='text-gray-300 text-xl'>{ques.t1}</p>}
          <hr className='w-full' />
        </div>
      ))}
    </>
  );
};

export default FAQ;