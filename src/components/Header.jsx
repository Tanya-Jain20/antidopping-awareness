import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header>
      <div className="logo">Anti-Doping</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/what-is-doping">What is Doping?</Link></li>
          <li><Link to="/harmful-effects">Harmful Effects</Link></li>
          <li><Link to="/cases">Doping Cases</Link></li>
          <li><Link to="/awareness">Awareness</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>
            <button 
              onClick={() => setShowModal(true)} 
              className="login-button"
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </header>
  );
}