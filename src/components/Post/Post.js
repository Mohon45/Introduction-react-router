import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {title, id} = props.post;
    const history =- useHistory()

    const handleClick = () => {
        history.push(`/post/${id}`)
    }
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={handleClick}>Click to see Details</button>
        </div>
    );
};

export default Post;