import { Home } from './pages/home/home'
import { Perfil } from './pages/perfil/perfil'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {

    return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
    </BrowserRouter>
        
    </>
    )    
}

export default App
