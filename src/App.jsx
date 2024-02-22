import './App.css';
import Pdfview from './components/Pdfview';
import Selectsem from './components/Selectsem';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sem5 from './components/Sem5';
import Soon from './components/Soon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Selectsem />}/>
        <Route path='/view/:PdfUrl' element={<Pdfview />} />
        <Route path="semester/1" element={<Soon />}/>
        <Route path="semester/2" element={<Soon />}/>
        <Route path="semester/3" element={<Soon />}/>
        <Route path="semester/4" element={<Soon />}/>
        <Route path="semester/5" element={<Sem5 />}/>
        <Route path="semester/6" element={<Soon />}/>
        <Route path="semester/7" element={<Soon />}/>
        <Route path="semester/8" element={<Soon />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
