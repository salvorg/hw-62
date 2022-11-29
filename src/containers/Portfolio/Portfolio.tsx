import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="mt-2">
      <NavLink to="joke-blog" className="btn btn-light me-2">Joke Blog</NavLink>
      <NavLink to="Burger" className="btn btn-light">Burger</NavLink>
      <Outlet/>
    </div>
  );
};

export default Portfolio;