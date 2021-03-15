import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
  children?: React.ReactNode;
}

const Navbar = ({ children }: Props) => {
  return (
    <nav className="navbar-main">
      <Link to="/" className="navbar-logo-text">
        <h4>MovieFlix</h4>
      </Link>
      {children}
    </nav>

  )
};

export default Navbar;