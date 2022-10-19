import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './images/logo.png';

const visitPageAction = (e) => {
  const links = document.querySelectorAll('.outer .inner-2 ul li a');
  for (let i = 0; i < links.length; i += 1) {
    if (links[i] === e.target) {
      e.target.classList.add('visited');
    } else {
      links[i].classList.remove('visited');
    }
  }
};

const Navbar = () => (
  <div className="outer">
    <div className="inner-1">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" width="40" height="40" />
        <p>Space Travelers&apos;Hub</p>
      </Link>
    </div>
    <div className="inner-2">
      <ul>
        <li><Link to="/" onClick={visitPageAction}>Rockets</Link></li>
        <li><Link to="/Categories" onClick={visitPageAction}>Missions</Link></li>
        <div className="vertical-line" />
        <li><Link to="/my-profile" onClick={visitPageAction}>My Profile</Link></li>
      </ul>
    </div>
  </div>
);
export default Navbar;
