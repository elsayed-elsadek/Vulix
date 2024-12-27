import Login from "./pages/Login";
import Home from "./pages/Home";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Step1 from "./component/Step1";
import Step2 from "./component/Step2";
import Step3 from "./component/Step3";
import ForgetPass from "./pages/ForgetPass";
import ForgetpassStep1 from "./component/ForgetpassStep1";
import ForgetpassStep2 from "./component/ForgetpassStep2";
import ForgetpassStep3 from "./component/ForgetpassStep3";
import ProtectedPage from "./layouts/ProtectedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Rigisteration Steps */}
        <Route path="/registration" element={<Registration />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        {/* Protected pages */}
        <Route element={<ProtectedPage />}>
          <Route path="/home" element={<Home />} />
          <Route path="/forgetpassword" element={<ForgetPass />} />
          <Route path="/forgetpassstep1" element={<ForgetpassStep1 />} />
          <Route path="/forgetpassstep2" element={<ForgetpassStep2 />} />
          <Route path="/forgetpassstep3" element={<ForgetpassStep3 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
