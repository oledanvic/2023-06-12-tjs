import React, {useState} from 'react';
import './App.css';
import Button from './components/ui/Button/Button'

function App() {
  const [counter, setcounter] = useState(0);
  return (
    <div className="App">
      La valeur de counter : {counter}
      <br/>
      <Button className="error" onClick={()=>{
        setcounter(counter - 1);
        console.log(counter);
      }}>-1</Button>
      <Button onClick={()=>{
        setcounter(counter + 1);
        console.log(counter);
      }}>+1</Button>
    </div>
  );
}

export default App;
