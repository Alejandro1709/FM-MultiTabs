import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StepProvider } from './context/stepContext.tsx'
import './index.css'
import { ToggleProvider } from './context/ToggleContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToggleProvider>
      <StepProvider>
        <App />
      </StepProvider>
    </ToggleProvider>
  </React.StrictMode>,
)
