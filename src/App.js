import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
              <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/books" element={<Books />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
