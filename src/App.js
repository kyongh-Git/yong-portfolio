import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Login from "./components/Login";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
