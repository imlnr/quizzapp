import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Quizcard from '../components/Quizcard';

const Quiz = () => {
  const state = useSelector((state) => state.questions);
  console.log(state);
  const [total,settotal] = useState(0);
  const setto = ()=>{
    settotal(total+1)
  }

  return (
    <div className='quiz-questions'>
      {state.map((ele) => (
        <Quizcard key={ele.id} settotal={setto} data={ele} />
      ))}

      <button>End Quiz</button>
    </div>
  );
};

export default Quiz;
