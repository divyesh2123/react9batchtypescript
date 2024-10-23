import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Counter from './Counter.tsx'
import FormData from './Form.tsx'
import UserData from './UserData.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserData />
  </StrictMode>,
)
