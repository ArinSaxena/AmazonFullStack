import Footer from "components/Footer";
import Form from "components/Form";
import Home from "pages/Home";

import LanguageSettings from "components/LanguageSettings";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />}></Route>
          <Route path="/language" element={<LanguageSettings />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
