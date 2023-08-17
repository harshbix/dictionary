import React, { useState } from "react";
// import axios from "axios";

function MyNav() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex" role="dark-mode-toggle">
            <select className="form-select form-select-sm border-0">
              <option defaultValue>Serif</option>
              <option value="1">Sans-Serif</option>
            </select>
            <div className="form-check form-switch">
              <input
                className="form-check-input mx-3"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
            <label className="form-check-label mx-2 col">🌙</label>
          </form>
        </div>
      </nav>
      <div className="search mx-2">
        <span className="fa fa-search"></span>
        <input placeholder="Search word" />
      </div>
    </div>
  );
}

const DictionaryApp = () => {
  return (
    <>
      <MyNav />
      <searchComponent />
    </>
  );
};

export default DictionaryApp;
