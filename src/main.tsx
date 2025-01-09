import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/reset.css'
import TodoLists from './pages/TodoLists'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoLists />
  </StrictMode>,
)
