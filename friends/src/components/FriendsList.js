import React, {useState, useEffect} from 'react'; 
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendForm from './FriendForm';
import GhostLoad from './GhostLoad';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
   
    const [add, setAdd] = useState(false);

    const toggleAdd = () => {
        setAdd(!add);
    }

    useEffect(()=> {
        getData()
    }, [])

    const getData = () => {
        setIsLoading(true);
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log('axios.get friends success! res:', res);
            setFriends(res.data);
            setIsLoading(false);
          })
        .catch(err => {
          console.error('axios.get friends error', err)
          setIsLoading(false)
        })
    }

    return (
    <>
    {isLoading ? <GhostLoad/> :
    <div className='f-cont'>
        <div className='user-card'>
            <i class="fas fa-user-circle usr"></i>
            <p><span className='span'>user:</span> Lambda School</p>
            <p><span className='span'>total friends:</span>{'  '}{friends.length}</p>
            <p className='add-fr' onClick={() => toggleAdd()}> add a friend {' '} 
                {add ? <i class="fas fa-chevron-up"></i> :
                <i class="fas fa-chevron-down"></i>}
                </p>
                {add ? <FriendForm getData = {getData}/> : null}
            
        </div>
        <div className='card-cont'>
        {
            friends.map(friend => {
                return(
                    <div className='friend-card' key={friend.id}>
                        <div>
                            <i class="far fa-user-circle fnd"></i>
                        </div>
                        <span className='content'>
                            <i class="fas fa-ellipsis-h"></i>
                            <h1 className='friend-h1'>{friend.name}</h1>
                            <p> age: {friend.age}</p>
                            <p> email: {friend.email}</p>
                        </span>
                        
                    </div>
                )
            })
        }
         </div>
    </div> }
    </>
    );
};

export default FriendsList;