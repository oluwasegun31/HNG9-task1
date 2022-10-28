import React from "react";
import profileImg from '../Images/profilepic.svg';
import shareIconDesk from '../Images/Icon.svg';
import shareIconMob from '../Images/Icon-mob.svg';
import './profile.css'

function Profile(){
    return(
        <header>
          <img src={profileImg} alt= 'profile' id='profile__img'/>
          <h2 id='twitter'>Oluwasegun</h2>
          <h2 id='slack'>oluwasegun31</h2>

          <div className='share'>
            <img src={shareIconDesk} alt= 'share-icon'/>
            <img src={shareIconMob} alt= 'share-icon'/>
          </div>
        </header>
    )
}

export default Profile