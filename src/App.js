import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book]);
  }

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]); // <-- runs only when `cart` changes

  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BookInfo books={books} cart={cart} addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart books={books} cart={cart} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
