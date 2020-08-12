import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const EditForm = props => {
    //in this form, I would like a state in which allows the user to click delete.
    //basically will call unto another file-- cause this is bloated.

    const [friend, setFriend] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    });

    const editFriend = props.friends.filter(f => f.id == props.propsid)
    console.log('edit friend',editFriend);

    useEffect(() => {
        axiosWithAuth()
        .get(`/friends/${editFriend[0].id}`)
        .then((res) => {
            console.log('edit form "get" req success:', res);
            setFriend(res.data);
        })
        .catch(err => console.error('edit form "get" req failure:', err));
    }, [editFriend.id]);

    const handleChanges = e => {
        e.persist()
        setFriend({...friend, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/friends/${editFriend[0].id}`, friend)
        .then((res) => {
            console.log('edit form "put" req success:', res);
            props.setEdit(false);
            //update the getData() i think. so import it thru props.
            // ORRR actually import the SETFRIENDS in friendslist
            props.setFriends(res.data);
        })
        .catch(err => {
            console.error('edit form "put" req failure:',err)
            props.setEdit(false)});
    };

    const putFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .put('/friends', putFriend)
        .then(res => {
            console.log('post friend success!', res);
            props.getData();
        })
        .catch(err => {
            console.err('post friend error!', err)
        });
    };


    return (
        <div  className='edit'>
        <h1>edit:</h1>
        <form onSubmit={handleSubmit} className='input-cont edit-fr'>
            <label htmlFor='name'>Name</label>
            <input
            name='name'
            type='text'
            value={friend.name}
            onChange={handleChanges}
            className='input'
            />

            <label htmlFor='password'>Age</label>
            <input
            name='age'
            type='text'
            value={friend.age}
            onChange={handleChanges}
            className='input'
            />

            <label htmlFor='password'>Email</label>
            <input
            name='email'
            type='text'
            value={friend.email}
            onChange={handleChanges}
            className='input'
            />
            <button className='btn'>update</button>
        </form>
        </div>
    );
};

export default EditForm;