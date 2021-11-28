import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement} from './actions/index'



function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <nav>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      {isLogged ? <h3>private info</h3> : <h3>You're not logged in!</h3>}
    </nav>
  );
}

export default App;
