import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter basename={"/challenge/js/pages/32_navbar/"}>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="project" element={<Project />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
