import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import MainPage from './MainPage';
import Header from './Header';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/TaskList' element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
