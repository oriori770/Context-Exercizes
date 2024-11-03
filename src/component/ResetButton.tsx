import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';

const ResetButton = () => {
    const context = useContext(CounterContext);

  return (
    <button onClick={context?.reset}>reset</button>
  )
}

export default ResetButton