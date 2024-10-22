import './App.css';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Catalog from './components/Pages/Catalog';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
