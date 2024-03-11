import React, { useState } from 'react';

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        difficulty: '',
        questionCount: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='home-cont'>
            <form onSubmit={handleFormSubmit} className="home-inn">
                <h1>Set up your Quiz</h1>
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Enter Your Name'
                />
                <select
                    name='category'
                    value={formData.category}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>Select a Category</option>
                    <option value="Sports">Sports</option>
                    <option value="Geography">Geography</option>
                    <option value="General Knowledge">General Knowledge</option>
                    <option value="politics">Politics</option>
                </select>
                <select
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>Select a Difficulty Level</option>
                    <option value="hard">Hard</option>
                    <option value="medium">Medium</option>
                    <option value="easy">Easy</option>
                </select>
                <input
                    type="number"
                    name="questionCount"
                    value={formData.questionCount}
                    onChange={handleInputChange}
                    placeholder='Choose number of Questions'
                />
                <button type='submit'>START QUIZ</button>
            </form>
        </div>
    );
}

export default Home;
