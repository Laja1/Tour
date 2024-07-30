import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homeapp from './app/home/page'
export default function App() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route path='/' element={<Homeapp />} />
      </Routes>
      </div>
      </BrowserRouter>
  )
}
