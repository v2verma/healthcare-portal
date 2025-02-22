import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white p-4" style={{background: "rgb(117 153 161)"}}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Bayer HCP</h1>
          </div>
          <div className="col text-right">
            <nav>
              <ul className="list-unstyled d-flex justify-content-end">
                <li><NavLink to="/" className={({isActive}) => `btn btn-default mx-2 ${isActive? 'text-primary fw-bolder': 'text-white'}`}>Home</NavLink></li>
                <li><NavLink to="/health" className={({isActive}) => `btn btn-default mx-2 ${isActive? 'text-primary fw-bolder': 'text-white'}`}>Health Topics</NavLink></li>
                <li><NavLink to="/service" className={({isActive}) => `btn btn-default mx-2 ${isActive? 'text-primary fw-bolder': 'text-white'}`}>Services</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => `btn btn-default mx-2 ${isActive? 'text-primary fw-bolder': 'text-white'}`}>Contact</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
