import React from 'react';

const GhostLoad = () => {
    const ghostArray = [1, 2, 3, 4, 5, 6]
    return (
        <div className='f-cont'>
        <div className='ghost-user gradient'>
            <i class="fas fa-circle usr r"></i>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div className='card-cont'>
        {
            ghostArray.map(el => {
                return(
                    <div className='ghost-friend gradient' key={Date.now()}>
                        <div>
                        <i class="fas fa-circle fnd"></i>
                        </div>
                        <span className='content'>
                            <h1 className='friend-h1'></h1>
                            <p></p>
                            <p></p>
                        </span>
                        
                    </div>
                )
            })
        }
         </div>
    </div>
    )
}

export default GhostLoad;