import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.img}>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.wrap}>
                <div>
                    ava + description
                </div>
            </div>
        </div>
    )

}

export default ProfileInfo;