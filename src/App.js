import { Routes, Route, Link } from "react-router-dom";
import Header from './compornets/Shared/Header';
import Home from './compornets/Home/Home';
import SignUp from "./compornets/Shared/SignUp";
import Login from "./compornets/Shared/Login";
import About from "./compornets/Home/About";
import Blogs from "./compornets/Home/Blogs";
import Contact from "./compornets/Home/Contact";
import Admin from "./compornets/Admin/Admin";
import User from "./compornets/Admin/User";
import Phm from './compornets/Admin/Phm';
import Leave from './compornets/Admin/Leave';
import Myinfo from './compornets/Admin/Myinfo';
import Time from './compornets/Admin/Time';
import Dashboard from './compornets/Admin/Dashboard'
import Pim from './compornets/Admin/Pim/pim'
import Footer from "./compornets/Shared/Footer";
import NoteFound from "./compornets/NoteFound";
import ProfessionDetails from "./compornets/Admin/Pim/ProfessionDetails";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);



  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };
  return (
    <div data-theme={theme && "my_dark"}>

      <Header handleThemeChange={handleThemeChange} theme={theme}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />


        <Route path='/admin' element={
          <Admin></Admin>

        }>
          <Route index element={<User></User>}></Route>
          <Route path='/admin/phm' element={<Phm></Phm>}></Route>
          <Route path='/admin/leave' element={<Leave></Leave>}></Route>
          <Route path='/admin/myinfo' element={<Myinfo></Myinfo>}></Route>
          <Route path='/admin/time' element={<Time></Time>}></Route>
          <Route path='/admin/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Route>

        {/* <Route path='/pim' element={

          <Pim></Pim>

        }>
          <Route index element={<ProfessionDetails></ProfessionDetails>}></Route>
          <Route path='phm' element={<Phm></Phm>}></Route>
          <Route path='leave' element={<Leave></Leave>}></Route>

        </Route> */}



        <Route path="*" element={<NoteFound></NoteFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
