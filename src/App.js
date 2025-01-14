import Home from "pages/Home";
import Footer from "components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route></Route>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
