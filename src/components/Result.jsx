import React, {useState} from 'react';
import * as name from '../scratch.js'

function Result(props) {
  const {name1, name2} = props
  const [result, setResult] = useState(null);
  
  

  const handleSubmit=()=>{
    let characters = (name.convertToChars(name.input(name1, name2)))
    let nums = name.find_duplicate_in_array(characters)
    let percentage = name.percentage(nums)
    setResult(percentage.join('') + '%')

  }
  
  return (
    <div className='flex-column align-center'>
      <button onClick={handleSubmit} style={{ fontFamily: 'Montserrat', fontSize: '22px', margin: '25px 0' }}>Enter</button>
      <p style={{ fontFamily: 'Montserrat', fontSize: '48px' }}>{result}</p>
      
    </div>
  );
}

export default Result;