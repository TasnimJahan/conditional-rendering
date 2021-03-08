import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    // 1st technique with if -else 
    let greetings;
    if(familiar === true) {
        greetings = <p>Welcome,My friend.</p>
    }
    else {
        greetings = <p>Who the hell are you?</p>
    }

    //2nd technique alternative of if else: 
    let food = familiar ? <p>I will buy food for you.</p>
                        : <p>Let's eat his his whose whose?</p>
    // if(familiar === true) {
    //     food = <p>I will buy food for you.</p>
    // }
    // else {
    //     food = <p>Let's eat his his whose whose?</p>
    // }
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greetings}
                {/* <p>Welcome,My friend.</p> */}
                {/* <p>Who the hell are you?</p> */}
            </div>
            <div>
                <h2>Food</h2>
                {food}
                {/* <p>I will buy food for you.</p> */}
                {/* <p>Let's eat his his whose whose?</p> */}
            </div>
            <div>
                <h2>Connection</h2>
                {
                    familiar && <p>Let's join my fb.</p>
                }
                {/* <p>Let's join my fb.</p> */}
                {/* <p>I don't add stranger</p> */}
            </div>
        </div>
    );
};

export default User;