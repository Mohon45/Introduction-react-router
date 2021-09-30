import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({})
    const history = useHistory();
    // console.log(params)

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, []);

    const handleClick = () => {
        history.push('/friends');
    }

    return (
        <div>
            <h2>Friends Details of {friendId}</h2>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h4>{friend.website}</h4>
            <p>Works at: {friend.company?.name}</p>
            <button onClick={handleClick}>See all Friends</button>
        </div>
    );
};

export default FriendDetails;