import { Navbar } from 'flowbite-react';

const NavBar = () => {
    return (
        <Navbar fluid rounded>
      <Navbar.Toggle />
      <Navbar.Collapse>

        <Navbar.Link href="/Huzaifa_Full_Stack.pdf" download="Huzaifa_Full_Stack.pdf">
          Download CV
        </Navbar.Link>
        <Navbar.Link  href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    );
};

export default NavBar;