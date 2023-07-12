import "./header.css";
import React, { useContext, useEffect, useRef } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/imgs/venturo-logo.png";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

export const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/", window.scrollTo(0, 0));
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (
        document.body.scrollTop > 1 ||
        document.documentElement.scrollTop > 1
      ) {
        headerRef.current.classList.add("sticky-header");
      }
      // else {
      //   headerRef.current.classList.remove("sticky-header");
      // }
    };

    window.addEventListener("scroll", stickyHeaderFunc);

    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container className="px-4">
        <Row>
          <div className="navbar">
            {/* Logo */}
            <div className="logo-container">
              <NavLink to="/home">
                <img src={logo} alt="" />
              </NavLink>
            </div>
            {/* ---- */}
            {/* menu */}
            <div className="navigation-menu">
              <ul className="menu">
                {navLinks.map((link, i) => (
                  <li className="menu-link" key={i}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "menu-link"
                          : isActive
                          ? "li-selected"
                          : "menu-link"
                      }
                    >
                      {" "}
                      {link.display}{" "}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ---- */}
            <div className="nav-buttons">
              <div className="nav-user">
                {user ? (
                  <>
                    <span className="user-name">{user.username}</span>
                    <Button variant="secondary" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="dark">
                      <Link to="/login" onClick={scrollToTop}>
                        Login
                      </Link>
                    </Button>
                    <Button variant="secondary">
                      <Link to="/register" onClick={scrollToTop}>
                        Register
                      </Link>
                    </Button>
                  </>
                )}
              </div>

              <span className="mobile-menu">
                <i className="bi bi-list"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};
