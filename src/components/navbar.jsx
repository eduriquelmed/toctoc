import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-brand">TocToc</div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/chart1">
                    Chart 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/chart2">
                    Chart 2
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/chart3">
                    Chart 3
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
