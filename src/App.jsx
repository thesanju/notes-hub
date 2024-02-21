import './App.css';
import Selectsem from './components/Selectsem';
import Sem1 from './components/Sem1';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Selectsem />}/>
        <Route path="semester/1" element={<Sem1 />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
