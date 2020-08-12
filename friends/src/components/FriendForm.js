import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = props => {
    const [addFriend, setAddFriend] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    });

    const handleChanges = e => {
        setAddFriend({...addFriend, [e.target.name]: e.target.value});
    }

    const [isLoading, setIsLoading] = useState(false);

    const postFriend = e => {
        e.preventDefault();
        setIsLoading(true);
        axiosWithAuth()
        .post('/friends', addFriend)
        .then(res => {
            console.log('post friend success!', res);
            props.getData();
            setIsLoading(false);
        })
        .catch(err => {
            console.err('post friend error!', err)
            setIsLoading(false);
        });
    };

   
    return (
        <div className='add-form'>
            <form onSubmit={postFriend} className='input-cont add'>
                <label htmlFor='username'>Name</label>
                <input
                name='name'
                type='text'
                value={addFriend.name}
                onChange={handleChanges}
                className='input'
                />

                <label htmlFor='password'>Age</label>
                <input
                name='age'
                type='text'
                value={addFriend.age}
                onChange={handleChanges}
                className='input'
                />

                <label htmlFor='password'>Email</label>
                <input
                name='email'
                type='text'
                value={addFriend.email}
                onChange={handleChanges}
                className='input'
                />
                <button className='btn'>+ FRIEND</button>
            </form>
            </div>
    )
}

export default FriendForm;