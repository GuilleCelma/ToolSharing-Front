import React from 'react';
import Popup from 'reactjs-popup';
import Signup from './signup';

function PopupSingup(){
   return( <div>
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div className="popup"><Signup/></div>
  </Popup>
  </div>)



}

export default PopupSingup;