import React, { useState }  from 'react';
import { render } from "react-dom";

import ListInput from './ListInput/ListInput';
import ListOutput from './ListOutput/ListOutput';

import './App.css';
import './ListOutput/ListOutput.css';
import './ListInput/ListInput.css';

const App = () => {

  const [fruit, setFruit] = useState({
      fruits: ['bananas', 'apples', 'lemons']
    } 
  );

  const [input, setInput] = useState({
    inputVal: ''
    }
  );

  const changeHandler = (event) => {
    setInput({
      inputVal: event.target.value
    })
  }

  const submitHandler = (event) => {
    const newValue = input.inputVal;
    console.log(newValue);
    fruit.fruits.push(newValue);
    setInput({
      inputVal: ''
    })
    event.preventDefault();
  }

  const deleteItem = (index) => {
    const list = fruit.fruits;
    list.splice(index, 1);
    setFruit({fruits: list})
  }


  return (
    <div className="App">
      <h3 className="app-title">Shopping List</h3>
      
      <ListOutput items={fruit.fruits} delete={deleteItem}/>
      <ListInput inputValue={input.inputVal} change={changeHandler} submit={submitHandler}/>
    </div>
  );
};

render(<App />, document.getElementById("root"));

export default App;

