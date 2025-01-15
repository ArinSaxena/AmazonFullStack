import Footer from "components/Footer";
import Form from "components/Form";
import Home from "pages/Home";

import LanguageSettings from "components/LanguageSettings";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "components/Navbar";
import Cart from "pages/Cart";

function navBarWrapper(element){
  return <>
  <Navbar />
  {element}
  </>
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={navBarWrapper(<Home />)} />
          
          <Route path="/language" element={<LanguageSettings />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
