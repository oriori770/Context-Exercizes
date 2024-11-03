import React,{useContext, useState} from 'react'
import  ResetButton from './ResetButton'
import { CounterContext } from '../context/CounterContext';
import IncrementButton from './IncrementButton';
import decrement from '../component/DecrementButton'
import DecrementButton from '../component/DecrementButton';

interface CounterContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  }
  

export const Counter = () => {
  const context = useContext(CounterContext);

if (!context) return null;
  return (
    <>
    <div>Counter: {context.count}</div>
    <div>

    <ResetButton/>
    <IncrementButton />
    <DecrementButton/>
    </div>
        

    </>
  )
}
