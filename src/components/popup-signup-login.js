import React from 'react';
import Popup from 'reactjs-popup';
import Signup from './signup';
import Login from './login'

function PopupSignup(){
   return( <div>
  <Popup trigger={<button> Signup or Login</button>} position="right center">
    <div className="popup">
        <Signup/>
        <Login/>
    </div>
  </Popup>
  </div>)



}

export default PopupSignup;