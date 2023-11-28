import Atom from './components/pages/Atom'
import Home from './components/pages/Home'
import Molecule from './components/pages/Molecule'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/atom' element={<Atom />} />
        <Route path='/molecule' element={<Molecule />} />
      </Routes>
    </Router>
  )
}

export default App
