import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import ContactoPage from './pages/ContactoPage';
import GaleriaPage from './pages/GaleriaPage';
import HomePage from './pages/HomePage';
import NovedadesPage from './pages/NovedadesPage';
import ServiciosPage from './pages/ServiciosPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='servicios' element={<ServiciosPage/>}/>
          <Route path='galeria' element={<GaleriaPage/>}/>
          <Route path='novedades' element={<NovedadesPage/>}/>
          <Route path='contacto' element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
