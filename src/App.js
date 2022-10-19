import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Books';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Categories" element={<Categories />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;
