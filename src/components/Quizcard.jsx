import React, { useState } from 'react';
import RadioButton from './RadioButton';

const Quizcard = ({data}) => {

  return (
    <div className='quiz-card'>
      <h2>{data.question}</h2>
      <form>
        {data.incorrect_answers.map((option, index) => (
          <RadioButton
            key={index}
            id={`option${index}`}
            name="options"
            value={option}
          />
        ))}
        <RadioButton value={data.correct_answer}/>
      </form>
    </div>
  );
};

export default Quizcard;
