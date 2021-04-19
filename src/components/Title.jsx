import React from 'react';
import './Title.css'
function Title(props) {
  return (
    <div className='flex-row title-box'>
      <div className='box-one'>
        <h2 id='coup'>coup</h2>
      </div>
      <div className='box-two'>
        <h2 id='ling'>ling</h2>
      </div>
    </div>
  );
}

export default Title;