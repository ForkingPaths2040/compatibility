import React, {useState} from 'react';
import {input, convertToNums} from '../scratch.js'

function Result(props) {
  const {name1, name2} = props
  const [full, setFull] = useState('');
  const [numbers, setNumbers] = useState();
  

  const handleSubmit=()=>{
    setFull(input(name1, name2))
  }
  
  return (
    <div className='flex-column align-center'>
      <button onClick={handleSubmit} style={{ fontFamily: 'Montserrat', fontSize: '22px', margin: '25px 0' }}>Enter</button>
      <p style={{ fontFamily: 'Montserrat', fontSize: '48px' }}>68%</p>
      <p>{full}</p>
      <p>{numbers}</p>
    </div>
  );
}

export default Result;