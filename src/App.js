import Footer from "components/Footer";
import Home from "pages/Home";

import LanguageSettings from "components/LanguageSettings";
import Navbar from "components/Navbar";
import Profile from "components/Profile";
import Signup from "components/Signup";

import axios from "axios";
import Cart from "pages/Cart";
import Login from "pages/Login";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//IF USER CHANGES , CHANGE THE CART

function navBarWrapper(element) {
  return (
    <>
      <Navbar />
      {element}
    </>
  );
}

function App() {
  // USER WILL COME FROM REDUX STORE
  // const user = useSelector((state) => state.user.userData);
  // useEffect(() => {
  //   axios.get("http:localhost6060:/cart");
  // }, [user]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={navBarWrapper(<Home />)} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/language"
            element={navBarWrapper(<LanguageSettings />)}
          ></Route>
          <Route path="/profile" element={navBarWrapper(<Profile />)}></Route>

          <Route path="/cart" element={navBarWrapper(<Cart />)}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
