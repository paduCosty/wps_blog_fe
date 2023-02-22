
import "./App.css";
// import LogoBar from "./components/LogoBar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useEffect } from "react";

import NavBar from "./components/layouth/NavBar";
import Home from "./pages/fe/home/Home";
import About from "./pages/fe/about/About";
import Portofolio from "./pages/fe/portofolio/Portofolio";
import Contact from "./pages/fe/contact/Contact";
import Footer from "./components/layouth/Footer";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import Logout from "./auth/login/Logout";

import Users from "./pages/be/users/Users";
import Products from "./pages/be/products/Products";
import Testimonials from "./pages/be/testimonials/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <LogoBar /> */}
        <NavBar />
        <Routes>

          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/portofolio" exact element={<Portofolio />} />
          <Route path="/contact" exact element={<Contact />} />

          <Route path="/admin/">
            <Route path="users" exact element={<Users />} />
            <Route path="products" exact element={<Products />} />
            <Route path="testimonials" exact element={<Testimonials />} />
          </Route>

          <Route path="/logout" exact element={<Logout />} />
          <Route path="/" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
