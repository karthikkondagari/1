import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {  
    const fetchUsername = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/getUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          }
        );
        const userData = await response.json();
        setUsername(userData.name);
      } catch (error) {
        console.error("Error in getting name:", error);
      }
    };

    if (localStorage.getItem("token")) {
      fetchUsername();
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand as={Link} to="/">
        iDiary
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavItem to="/" label="Home" activeLink={activeLink} />
          <NavItem to="/about" label="About" activeLink={activeLink} />
        </Nav>
        <Nav>
          {localStorage.getItem("token") ? (
            <AuthenticatedNav username={username} handleLogout={handleLogout} />
          ) : (
            <UnauthenticatedNav />
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const NavItem = ({ to, label, activeLink }) => (
  <Nav.Link as={Link} to={to} className={activeLink === to ? "active" : ""}>
    {label}
  </Nav.Link>
);

const AuthenticatedNav = ({ username, handleLogout }) => (
  <NavDropdown
    title={<FontAwesomeIcon icon={faUser} className="profile-icon" />}
    id="basic-nav-dropdown"
  >
    <NavDropdown.Item as={Link} to="/profile">
      Profile
    </NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
  </NavDropdown>
);

const UnauthenticatedNav = () => (
  <Nav>
    <Nav.Link as={Link} to="/login">
      Login
    </Nav.Link>
    <Nav.Link as={Link} to="/signup">
      Signup
    </Nav.Link>
  </Nav>
);

export default NavigationBar;
