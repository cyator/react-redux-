import React from 'react';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './store';
import { Provider } from 'react-redux';

import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<PostForm />
				<hr />
				<Posts />
			</div>
		</Provider>
	);
}

export default App;
