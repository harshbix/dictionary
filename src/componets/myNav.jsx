function MyNav() {
  return (
    <div className="py-3">
      <nav className="navbar">
        <div className="container">
          <a href="#" className="navbar-brand">
            <span className="fa fa-book"></span>
            <span className="fw-bold h6 text-decoration-none"> Dictionary</span>
          </a>
          <form className="row align-items-center" role="dark-mode-toggle">
            <div className="col-auto">
              <select className="form-select form-select-sm border-0">
                <option defaultValue>Serif</option>
                <option value="1">Sans-Serif</option>
              </select>
            </div>
            <div className="col-auto">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label className="form-check-label mx-2">🌙</label>
              </div>
            </div>
          </form>
        </div>
      </nav>
      <form className="search" action="/action_page.php">
        <input type="text" placeholder="Search.." name="search" className="rounded-3 rounded-end-0"/>
        <button type="submit" className="rounded-3 rounded-start-0">
          <i className="fa fa-search purple-color"></i>
        </button>
      </form>
    </div>
  );
}

export default MyNav;
