import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Catalog from './components/Pages/Catalog';
import About from './components/Pages/About';
import Crochet from './components/Pages/Crochet';
import CreateCrochet from './components/crochet/CreateCrochet';
import Login from './components/Pages/Login';

function App() {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
        <NavBar />
        <div className="app">
        <Routes >
          <Route path="/" element={<Catalog />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path='/crochet/:id' element={<Crochet />} />
          <Route path='/admin/create' element={<CreateCrochet />} />
        </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
