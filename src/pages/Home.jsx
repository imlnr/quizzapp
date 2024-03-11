import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchquestions } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
} from '@chakra-ui/react';

const Home = () => {
    const state = useSelector((state) => state);
    console.log(state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        difficulty: '',
        questionCount: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchquestions(formData));
        console.log(formData);
        setTimeout(() => {
            navigate('/quiz-dashboard');
        }, 2000); // Delay of 2 seconds (2000 milliseconds)
    };


    useEffect(() => { }, [dispatch, handleFormSubmit]);

    return (
        <Box className='home-cont'>
            <form onSubmit={handleFormSubmit} className='home-inn'>
                <h1>Set up your Quiz</h1>
                <FormControl>
                    <Input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='Enter Your Name'
                    />
                </FormControl>
                <FormControl>
                    <Select
                        name='category'
                        value={formData.category}
                        onChange={handleInputChange}
                        placeholder='Select a Category'
                    >
                        <option value='9'>General Knowledge</option>
                        <option value='21'>Sports</option>
                        <option value='22'>Geography</option>
                        <option value='24'>Politics</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <Select
                        name='difficulty'
                        value={formData.difficulty}
                        onChange={handleInputChange}
                        placeholder='Select a Difficulty Level'
                    >
                        <option value='hard'>Hard</option>
                        <option value='medium'>Medium</option>
                        <option value='easy'>Easy</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <Input
                        type='number'
                        name='questionCount'
                        value={formData.questionCount}
                        onChange={handleInputChange}
                        placeholder='Choose number of Questions'
                    />
                </FormControl>
                <Button type='submit'>START QUIZ</Button>
            </form>
        </Box>
    );
};

export default Home;
