import { Link } from "react-router-dom"
import '../css/nav.css'

const Navbar = () => {
  return (
    <div className="bg-primary">
        <nav className="navbar navbar-expand-lg bg-warning fixed-top">
            <div className="container-fluid ">
                <Link to='/' className="navbar-brand text-success">OjSounds</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/about' className="nav-link">About</Link>
                        </li>
                        <li className="nav-item" >
                        <Link to='/contact' className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/services' className="nav-link">Services</Link>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
