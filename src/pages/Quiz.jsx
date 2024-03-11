import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Quizcard from '../components/Quizcard';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const state = useSelector((state) => state.questions);
  console.log(state);
  const [total,settotal] = useState(0);
  const setto = ()=>{
    settotal(total+1)
  }
  const navigate = useNavigate();
  const CheckScore = ()=>{
    navigate('/result',{props:total});
  }

  return (
    <div className='quiz-questions'>
      {state.map((ele) => (
        <Quizcard key={ele.id} settotal={setto} data={ele} />
      ))}

      <button onClick={CheckScore}>End Quiz</button>
    </div>
  );
};

export default Quiz;
