import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

function Posts({ posts, fetchPosts }) {
	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	return (
		<div>
			<h1>Posts</h1>

			{posts.map((post) => (
				<div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
}

Posts.propTypes = {
	posts: PropTypes.array.isRequired,
	fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
