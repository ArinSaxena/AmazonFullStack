import Footer from "components/Footer";
import Home from "pages/Home";

import LanguageSettings from "components/LanguageSettings";
import Navbar from "components/Navbar";
import Signup from "components/Signup";

import Cart from "pages/Cart";
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "pages/Login";

function navBarWrapper(element) {
  return (
    <>
      <Navbar />
      {element}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={navBarWrapper(<Home />)} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/language" element={navBarWrapper(<LanguageSettings />)}></Route>
          <Route path="/cart" element={navBarWrapper(<Cart />)}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
