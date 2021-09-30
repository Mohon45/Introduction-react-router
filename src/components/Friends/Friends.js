
import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h4>Thr Total Friends {friends.length}</h4>
            <div  className="grid-card">
                {
                    friends.map(friend => <Friend friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;
