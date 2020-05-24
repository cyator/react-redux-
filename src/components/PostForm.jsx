import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createNewPost } from '../actions/postActions';

function PostForm({ createNewPost }) {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		createNewPost({
			title,
			body,
		});
	};

	return (
		<div onSubmit={handleSubmit}>
			<h1>Add Post</h1>
			<form>
				<div>
					<label>Title: </label>
					<br />
					<input
						name='title'
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<br />
				<div>
					<label>Body: </label>
					<br />
					<textarea
						name='body'
						type='text'
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
				</div>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

PostForm.propTypes = {
	createNewPost: PropTypes.func.isRequired,
};

export default connect(null, { createNewPost })(PostForm);
