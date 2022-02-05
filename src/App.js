import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement, logIn} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick ={()=> dispatch(increment(5))}>+</button>
      <button onClick ={()=> dispatch(decrement(5))}>-</button>
      <button onClick ={()=> dispatch(logIn())}>log in/out</button>
      {isLogged ?<h3>Information I shouldn't see if I'm not logged in</h3> : ''}
    </div>
  );
}

export default App;
