import Login from "./pages/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authonication from "./layouts/Authonication";
import RegisterComponents from "./component/registerations/RegisterComponents";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* Rigisteration Steps */}
        {/* <Route path="/registration" element={<Registration />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} /> */}
        {/* Protected pages */}
        {/* <Route element={<ProtectedPage />}> */}
        {/* <Route path="/home" element={<Home />} />
          <Route path="/forgetpassword" element={<ForgetPass />} />
          <Route path="/forgetpassstep1" element={<ForgetpassStep1 />} />
          <Route path="/forgetpassstep2" element={<ForgetpassStep2 />} />
          <Route path="/forgetpassstep3" element={<ForgetpassStep3 />} /> */}
        {/* </Route> */}
        <Route path="/" element={<Home/>} />

     
        <Route element={<Authonication />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterComponents />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
