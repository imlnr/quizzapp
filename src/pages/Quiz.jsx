import React from 'react';
import { useSelector } from 'react-redux';
import Quizcard from '../components/Quizcard';

const Quiz = () => {
  const state = useSelector((state) => state.questions);
  console.log(state);
  
  return (
    <div className='quiz-questions'>
      {state.map((ele) => (
        <Quizcard key={ele.id} data={ele} />
      ))}
    </div>
  );
};

export default Quiz;
