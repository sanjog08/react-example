import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstIntro from './components/FirstIntro';
import Marque from './components/Marque';
import Tips from './components/Tips';


function App() {
  return (
    <>
  <Router>
    <Navbar />
      <Routes>
        <Route path="/products" element={<div>Products Page</div>} />
        <Route path="/blogs" element={<div>Blogs Page</div>} />
        <Route path="/profile" element={<div>Profile Page</div>} />
      </Routes>
    </Router>
    <FirstIntro />
    <Marque />
    <Tips />
    </>
  );
}

export default App;