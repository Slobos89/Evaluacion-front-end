import { NavLink } from "react-router-dom"
import "./style.css"

export const Navbar = () => {
  const src="/assets/heroes/logo-dead-pool.png"
  return (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-5">
    <div className="container-fluid">
      <img src={src} className="img-fluid rounded-start logo" alt="..."/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/anime">Anime</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/comics">Comics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Logout</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
