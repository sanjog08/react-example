import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstIntro from './components/FirstIntro';
import Marque from './components/Marque';
import Tips from './components/Tips';
import Products from './components/Products';
import Feedback from './components/Feedback';
import Ending from './components/Ending';


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
    <Products />
    <Ending />
    <Feedback />
    </>
  );
}

export default App;