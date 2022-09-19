import React from "react";
import "../components/TestNavbar.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {BsGlobe2} from "react-icons/bs"

const TestNavbar = () => {
  return (
    <div className="navbartest1">
      <Navbar
        className="navbartest2"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#homepage">Anasayfa</Nav.Link>
              

              <NavDropdown title="Bugg Hakkında?" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Bugg Kimdir?
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Nasıl Çalışır
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Bugg Partnerlik Başvurusu
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Yol Haritası
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#buggcommunity">Bugg Topluluğu</Nav.Link>

              <Nav.Link href="#career">Kariyer</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <NavDropdown title="Destek?" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                <BsGlobe2/>
                  Bize Ulaşın
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">S.S.S.</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              
              <NavDropdown title="EN/TR"  id="collasible-nav-dropdown">
                
                <NavDropdown.Item href="#action/3.4">
                    Türkçe 
                <span class="fi fi-tr"></span>
                
               
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">
                    English
                    <span class="fi fi-us"></span>
                </NavDropdown.Item>
              </NavDropdown>
              {/* </BsGlobe2>
                <BsGlobe2 style={{fontSize:"50px"}}> */}
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TestNavbar;
