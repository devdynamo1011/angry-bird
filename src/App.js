import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/angry-bird/Main";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/angry-bird" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
