import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StepProvider } from './context/stepContext.tsx'
import { PlanProvider } from './context/planContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PlanProvider>
      <StepProvider>
        <App />
      </StepProvider>
    </PlanProvider>
  </React.StrictMode>,
)
