import { BrowserRouter, Routes, Route } from 'react-router-dom';


import App from './pages/app';
import Exc from './pages/exc';
import Eventos from './pages/eventos';


export default function Navegacao() {


    return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> } />
        <Route path='/exc' element={ <Exc /> } />
        <Route path='/eventos' element={ <Eventos /> } />
      </Routes>
    </BrowserRouter>

    );
}
