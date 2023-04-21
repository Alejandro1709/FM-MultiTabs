import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StepProvider } from './context/stepContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StepProvider>
      <App />
    </StepProvider>
  </React.StrictMode>,
)
