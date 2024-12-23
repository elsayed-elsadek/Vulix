
import Login from './pages/Login';
import Home from './pages/Home';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Step1 from './component/Step1';
import Step2 from './component/Step2';
import Step3 from './component/Step3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />


      </Routes>
    </Router>
  );
}

export default App;