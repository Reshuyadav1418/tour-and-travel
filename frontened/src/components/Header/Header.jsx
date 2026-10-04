import React, { useRef, useEffect, useContext, useState } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import "./header.css";
import { AuthContext } from './../../context/AuthContext';
import { useToast } from './../../context/ToastContext';

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const { showToast } = useToast();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const confirmLogout = () => {
    dispatch({ type: 'LOGOUT' });
    setShowLogoutModal(false);
    showToast('Logged out successfully', 'info', 'Logout');
    navigate('/');
  };

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current?.classList.add('sticky_header');
      } else {
        headerRef.current?.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <>
      <header className="header" ref={headerRef}>
        <Container>
          <Row>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="logo">
                <Link to="/home">
                  <img src={logo} alt="Voyage Verve Logo" />
                </Link>
              </div>

              {/* Navigation Menu */}
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <ul className="menu d-flex align-items-center gap-4 mb-0">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) => (navClass.isActive ? "active__link" : "")}
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Auth Buttons / User Info */}
              <div className="nav__right d-flex align-items-center gap-3">
                <div className="nav__btns d-flex align-items-center gap-3">
                  {user ? (
                    <div className="user__profile d-flex align-items-center gap-3">
                      <div className="user__badge d-flex align-items-center gap-2">
                        <div className="user__avatar">
                          <i className="ri-user-3-fill"></i>
                        </div>
                        <span className="user__name">{user.username}</span>
                      </div>
                      <Button className="btn logout__btn" onClick={() => setShowLogoutModal(true)}>
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Button className="btn secondary__btn">
                        <Link to="/login">Login</Link>
                      </Button>
                      <Button className="btn primary__btn">
                        <Link to="/register">Register</Link>
                      </Button>
                    </>
                  )}
                </div>

                {/* Mobile Menu Icon */}
                <span className="mobile__menu" onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </header>

      {/* Colorful Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal-card">
            <div className="logout-modal-icon">
              <i className="ri-logout-box-r-line"></i>
            </div>
            <h4 className="logout-modal-title">Confirm Logout</h4>
            <p className="logout-modal-desc">
              Are you sure you want to log out of your account?
            </p>
            <div className="logout-modal-actions">
              <button
                className="logout-modal-btn cancel-btn"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button
                className="logout-modal-btn confirm-btn"
                onClick={confirmLogout}
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header