import { Link } from 'react-router-dom';
import React from "react"

import { About, Contact, Resume } from "../svgs/index";

import "./header.scss"
const Header = () => (
  <header className="Header">
    <section className="Header__title" aria-label="Ren Estep Website">
      <div className="Header__title-hello">
        <h1>Hello</h1>
        <p>my name is</p>
      </div>
      <h1 className="Header__title-heading">
        <Link to="/" aria-label="Ren Goes Home">Ren</Link>
      </h1>
    </section>
    <nav className="Header__nav">
      <Link className="Header__nav-link" to="/about">
        <About />
        <h2>About</h2>
      </Link>
      <Link className="Header__nav-link" to="/resume">
        <Resume />
        <h2>Resume</h2>
      </Link>
      <Link className="Header__nav-link" to="/contact">
        <Contact />
        <h2>Contact</h2>
      </Link>
    </nav>
  </header>
)

export default Header
