import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button'

function App() {
  return (
    <div className="App">
      <div>Olivier - ReactJS</div>
      <Button onClick={(unParamDeLenfant)=>{
        console.log('fonction envoyee par le parent', unParamDeLenfant);
      }}><img src='/img/ok.png'/></Button>
      <Button><img src='/img/cancel.png'/></Button>
    </div>
  );
}

export default App;
