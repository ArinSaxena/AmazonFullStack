import Footer from "components/Footer";
import Home from "pages/Home";

import LanguageSettings from "components/LanguageSettings";
import Navbar from "components/Navbar";
import Form from "components/Form";

import Cart from "pages/Cart";
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";

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
          <Route path="/form" element={<Form />} />


          <Route path="/language" element={navBarWrapper(<LanguageSettings />)}></Route>
          <Route path="/cart" element={navBarWrapper(<Cart />)}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
