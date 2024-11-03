import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';

const DecrementButton = () => {
    const context = useContext(CounterContext);

  return (
    <button onClick={context?.decrement}>decrement</button>
  )
}

export default DecrementButton