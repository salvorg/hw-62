import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import Stegosaurus from "./containers/Stegosaurus/Stegosaurus";
import Portfolio from "./containers/Portfolio/Portfolio";
import Pterodactylus from "./containers/Pterodactylus/Pterodactylus";
import JokeBlog from "./containers/JokeBlog/JokeBlog";
import BurgerCel from "./containers/Burger/BurgerCel";

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}/>
          <Route path="/stegosaurus" element={(
            <Stegosaurus/>
          )}/>
          <Route path="/pterodactylus" element={(
            <Pterodactylus/>
          )}/>
          <Route path="/portfolio" element={(
            <Portfolio/>
          )}>
            <Route path="joke-blog" element={(
              <JokeBlog/>
            )}/>
            <Route path="burger" element={(
              <BurgerCel/>
            )}/>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
