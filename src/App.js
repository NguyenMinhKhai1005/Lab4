import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import { CartProvider } from "./Components/CartContext";
import PizzaCarousel from "./Components/PizzaCarousel";
import { LoginProvider } from "./LoginContext";
import { ThemeProvider } from "./Components/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LoginProvider>
        <CartProvider>
          <Container>
            <Header />
            <PizzaCarousel />
            <Cart />
          </Container>
        </CartProvider>
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
