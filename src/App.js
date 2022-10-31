import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Products from './components/Header/Products/Products';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/header' element={<Header/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>  
    </div>
  );
}

export default App;
