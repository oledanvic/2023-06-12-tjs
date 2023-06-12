import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button'

function App() {
  return (
    <div className="App">
      <div>Olivier - ReactJS</div>
      <Button><img src='/img/ok.png'/></Button>
      <Button text="cancel"></Button>
    </div>
  );
}

export default App;
