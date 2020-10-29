import React, {useState} from 'react'
import './App.css';


function App() {
  const [string, setString] = useState('')
  setString('Amber')

const strToNum = (str) => {
  const regex = /[a-z]/g;
return str.toLowerCase().split('').map((item, index) => item.match(regex) ?
item[index] = 1 : 
  item)
}
console.log(strToNum(string))
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
