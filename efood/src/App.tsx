import { Home } from './pages/home/home'
import { Perfil } from './pages/perfil/perfil'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { BaseHome } from './pages/base/base';
import { BasePerfil } from './pages/base/base';

function App() {

    return (
    <>
    <BrowserRouter>
        <Routes >
            
            <Route path="/" element={<BaseHome/>}>
                <Route index element={<Home />} />
                <Route path="*" />
            </Route>
            <Route path="/perfil" element={<BasePerfil/>}>
                <Route index element={<Perfil />} />
                
            </Route>
            
        </Routes>
    </BrowserRouter>
        
    </>
    )    
}

export default App
