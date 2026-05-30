
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AuthProvider } from './components/pages/auth/authContext.tsx'


createRoot(document.getElementById('root')!).render(


<BrowserRouter>
<AuthProvider>
  <App />
</AuthProvider>
</BrowserRouter>

)
