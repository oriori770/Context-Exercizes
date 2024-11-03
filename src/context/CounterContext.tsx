import React, { Children, createContext, FC, useState } from 'react'
interface CounterContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  }
  
export const CounterContext = createContext<CounterContextType | null>(null);

const CounterContextProvider :FC<{children:React.ReactNode}> = ({children}) => {
     const [count, setcount] = useState(0) 

    const increment = () => {
        setcount(perv => perv + 1)
    }
    const decrement = () => {
        setcount(prev => prev - 1)
    }
    const reset = () => {
        setcount(0)
    }

  return (
    <>
        <CounterContext.Provider value={{count, increment, decrement, reset}}>
            {children}
        </CounterContext.Provider>
    </>
  )
}

export default CounterContextProvider