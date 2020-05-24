import * as actionTypes from './types';
import axios from 'axios';

export const fetchPosts = () => (dispatch) => {
	axios
		.get('http://jsonplaceholder.typicode.com/posts')
		.then((res) => {
			dispatch({
				type: actionTypes.FETCH_POSTS,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const createNewPost = (postData) => (dispatch) => {
	axios
		.post('http://jsonplaceholder.typicode.com/posts', postData)
		.then((res) => {
			dispatch({
				type: actionTypes.NEW_POST,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};
