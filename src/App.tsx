import { BrowserRouter } from 'react-router-dom'
import RouterGuard from '@/router/guard'

function App() {
  return (
    <BrowserRouter>
      <RouterGuard />
    </BrowserRouter>
  )
}

export default App

