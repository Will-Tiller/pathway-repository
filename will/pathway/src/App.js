import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/pages/Inicio'
import Contactos from './components/pages/Contactos'
import Servicos from './components/pages/Servicos'
import Vagas from './components/pages/Vagas'
import Sobre from './components/pages/Sobre'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/servicos' element={<Servicos />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/vagas' element={<Vagas />} />
          <Route path='/contactos' element={<Contactos />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
