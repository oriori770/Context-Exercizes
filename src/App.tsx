import React from 'react' 
import './App.css'
import { Counter } from './component/Counter'
import CounterContextProvider from './context/CounterContext'

const App: React.FC = ()=> {
  

  return (
    <>
    
        <div>
          <CounterContextProvider>
            <Counter />
          </CounterContextProvider>
        </div>
    </>
  )
}

export default App
