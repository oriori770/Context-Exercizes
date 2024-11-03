import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';

const IncrementButton = () => {
    const context = useContext(CounterContext);

  return (
    <button onClick={context?.increment}>increment</button>
  )
}

export default IncrementButton