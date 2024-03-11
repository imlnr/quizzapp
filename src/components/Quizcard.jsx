import React, { useState } from 'react';
import RadioButton from './RadioButton';

const Quizcard = ({ data ,settotal}) => {
  const [selectedOption, setSelectedOption] = useState('');


  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const validate = () => {
    // Check if an option is selected
    if (selectedOption === '') {
      alert('Please select an option');
      return;
    }
    // Check if the selected option is correct
    if (selectedOption === data.correct_answer) {
      settotal(prev=>prev+1)
      alert('Correct answer!');
    } else {
      alert('Incorrect answer!');
    }
    // Clear the selected option
    setSelectedOption('');
  };

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
            checked={selectedOption === option}
            onChange={handleChange}
          />
        ))}
        <RadioButton
          id="correctOption"
          name="options"
          value={data.correct_answer}
          checked={selectedOption === data.correct_answer}
          onChange={handleChange}
        />
        <button
          style={{ border: 'black', backgroundColor: 'orange', color: 'white', padding: '1%', borderRadius: '8px' }}
          onClick={validate}
          type='button' // Use type='button' to prevent form submission
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Quizcard;
