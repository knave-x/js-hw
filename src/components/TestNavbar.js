import React from "react";
 import "../components/TestNavbar.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
// import "../components/VideoStyles.css"


import { BsFillPeopleFill} from "react-icons/bs";
import {GrGamepad} from "react-icons/gr"
import {FiNavigation,FiSettings} from "react-icons/fi"
import {SiGrunt}from "react-icons/si"
import {MdContactMail}from "react-icons/md"
import {BiCopyright} from "react-icons/bi"
import Video from "./Video";

const TestNavbar = () => {
  return (
    <div className="navbartest1">
      
      <Navbar
        className="navbartest2"
        collapseOnSelect
        expand="lg"
        // bg="dark"
        // variant="dark"
      >
        <Container>
          
          <Navbar.Brand className="title1" href="#home"> <GrGamepad className="icontitle"/>gamercv</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#homepage">Anasayfa</Nav.Link>

              <NavDropdown title="Bugg Hakkında?" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <SiGrunt className="SiGrunt"/>
                  Bugg Kimdir?
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  <FiSettings className="FiSettings"/>
                  Nasıl Çalışır
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  <BsFillPeopleFill className="BsFillPeopleFill"/>
                  Bugg Partnerlik Başvurusu
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                <FiNavigation className="navigationIcon"/>
                  Yol Haritası
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#buggcommunity">Bugg Topluluğu</Nav.Link>

              <Nav.Link href="#career">Kariyer</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <NavDropdown title="Destek?" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <MdContactMail className="MdContactMail" />
                  Bize Ulaşın
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  <BiCopyright className="BiCopyright"/>
                  S.S.S.</NavDropdown.Item> 
              </NavDropdown>
            </Nav>
            <Nav>
            <Button   className="newButton" variant="outline-info"> <GrGamepad  className="gamericon" /> Giriş Yap</Button>

              <NavDropdown title="EN/TR" id="collasible-nav-dropdown">
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
      
      <Video/>
    </div>
  );
};

export default TestNavbar;
