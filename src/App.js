import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Categories from './components/Categories';
// import Books from './components/Books';
import Navbar from './components/Navbar';
import MyProfile from './components/My profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
