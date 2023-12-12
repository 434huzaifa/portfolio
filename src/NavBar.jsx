import { Button, Navbar } from 'flowbite-react';
import { FaFileDownload } from "react-icons/fa";
const NavBar = () => {
    return (
        <Navbar fluid rounded className='mb-5 bg-white/10 backdrop-blur-sm'>
          <div className='flex w-full justify-end'>
          <a href="/Huzaifa_Full_Stack.pdf" download="Huzaifa_Full_Stack.pdf">
          <Button color="purple" size="sm"><span className='flex gap-3 items-center'><FaFileDownload /><>Download CV</></span></Button>
          </a>
          </div>
    </Navbar>
    );
};

export default NavBar;