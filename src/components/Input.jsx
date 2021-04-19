import React from 'react';
import './Input.css'
function Input(props) {
  return (
    <div className='flex-column align-center '>
      <p style={{ fontFamily: 'Montserrat', fontSize: '32px', color: 'white' }}>
        ENTER <strong style={{color:'#023e8a'}}>NAMES</strong> TO TEST<strong style={{color:'#023e8a'}}> COMPATIBILITY</strong></p>
      <div className='flex-row name-input'>
        <input />
        <input />
      </div>
    </div>
  );
}

export default Input;