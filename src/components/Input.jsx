import React, {useState} from 'react';
import './Input.css'
import Result from './Result';
function Input(props) {
  const [data, setData] = useState({
    name1: '',
    name2: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  
  
  return (
    <div className='flex-column align-center '>
      <p style={{ fontFamily: 'Montserrat', fontSize: '32px', color: 'white' }}>
        ENTER <strong style={{color:'#023e8a'}}>NAMES</strong> TO TEST<strong style={{color:'#023e8a'}}> COMPATIBILITY</strong></p>
      <div className='flex-row name-input'>
        <input name='name1' value={data.name1} onChange={handleChange}/>
        <input name='name2' value={data.name2} onChange={handleChange}/>
      </div>
      <Result name1={data.name1} name2={data.name2}/>
    </div>
  );
}

export default Input;