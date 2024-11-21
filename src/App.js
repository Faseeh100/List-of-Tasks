import logo from './logo.svg';
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>

      <Route path="/" element={<Create />} />
      <Route path="/read" element={<Read />} />
      <Route path="/update" element={<Update />} />


      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
