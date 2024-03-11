import axios from "axios";
import { GET_QUESTION_FAILURE, GET_QUESTION_REQUEST, GET_QUESTION_SUCCESS } from "./action-types"
import { log } from "util";

export const fetchquestions = ({category,difficulty,questionCount})=>{
    // console.log(category,difficulty,questionCount);
    return async(dispatch) =>{
        dispatch({type:GET_QUESTION_REQUEST});
        try {
            // let url = `https://opentdb.com/api.php?amount=${questionCount}&category=${category}&difficulty=${difficulty}&type=multiple`;
            let url = `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`;
            let data = await axios.get(url);
            dispatch({type:GET_QUESTION_SUCCESS,payload:data.data.results})
            console.log(data.data.results);
        } catch (error) {
            console.log(error);
            dispatch({type:GET_QUESTION_FAILURE})
        }
    }
}