import { useEffect, useState } from "react";
import "./App.css";
import ListProducts from "./components/List Products";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ListProducts />
      <Footer />
    </div>
  );
}

export default App;