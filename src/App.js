import { Routes, Route, Link } from "react-router-dom";
import Header from './compornets/Shared/Header';
import Home from './compornets/Home/Home';
import SignUp from "./compornets/Shared/SignUp";
import Login from "./compornets/Shared/Login";
import About from "./compornets/Home/About";

function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
