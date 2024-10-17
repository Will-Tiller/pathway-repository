import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Contactos from './pages/Contactos';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
;
function App() {

  return (
    <>
       <div className='w-full min-h-screen'>
           <Router>
              <Routes>
                 <Route path='/sobre' element={<Sobre/>}/>
                 <Route path='/servicos' element={<Servicos/>}/>
                 <Route path='/contactos' element={<Contactos/>}/>
              </Routes>
           </Router>
       </div>
    </>
  )
}

export default App
