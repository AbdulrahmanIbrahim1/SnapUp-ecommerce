import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import NavbarApp from '../navbar/navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    < >

      <Navbar expand="lg" className="bg-orange text-white d-flex flex-column">
        <Container >
          <ul className='left-navbar navbar-nav d-flex align-items-center ' >
            <li className='mx-2 '>
              <Link to="/" className='text-white navbar-brand'>
                <>Seller Center</>
              </Link>
            </li>
            <li className='vert-line mx-2'>|</li>
            <li className='mx-2'>
              <Link to="/" className='text-white navbar-brand'>
                Download
              </Link>
            </li>
            <li className='vert-line mx-2'>|</li>
            <li className='d-flex mx-2'>
              <span className='navbar-brand text-white' >
                Follow us on
              </span>
              <ul className='social-links d-flex align-items-center ps-0'>
                <a href='https://www.facebook.com/'>
                  <i className="mx-2 fa-brands fa-facebook text-white"></i>
                </a>
                <a href='https://www.instagram.com/?hl=ar'>
                  <i className="mx-2 fa-brands fa-instagram text-white"></i>
                </a>
              </ul>
            </li>
          </ul>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center text-white">
              <Link href="/" className='nav-link text-white' >
                <span>
                  <i className="fa-solid fa-circle-question"></i>
                </span>
                <span> Support</span>
              </Link>
              <li className='vert-line mx-2'>|</li>
              <Link href="/" className='nav-link text-white'>
                Register
              </Link>
              <li className='vert-line mx-2'>|</li>
              <Link href="/" className='nav-link text-white'>
                Log in
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container>
          <hr className='str-line' />
        </Container>
        <Container>
          <NavbarApp />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;