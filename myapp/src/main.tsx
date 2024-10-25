import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Counter from './Counter.tsx'
import FormData from './Form.tsx'
import UserData from './UserData.tsx'
import UserInfo from './UserInfo.tsx'
import Registration from './Registration.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Registration />
  </StrictMode>,
)
