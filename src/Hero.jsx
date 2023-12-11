import { Button } from "flowbite-react";
import { FaLinkedin,FaGithubSquare  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Hero = () => {
    return (
        <div className="flex gap-2 justify-between">
            <div>
                <p>Hi,I am <span>Huzaifa</span></p>
                <p>Full Stack Developer</p>
                <p>Hi, i am Md. Huzaifa. I am a fullstack Developer with profficiency in Django</p>
                <div className="flex gap-5">
                    <Button><FaLinkedin />LinkedIn</Button>
                    <Button><FaGithubSquare />Github</Button>
                    <Button><IoMdMail />Mail</Button>
                </div>
            </div>
            <div>
                <img src="/my.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;