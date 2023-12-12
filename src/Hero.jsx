import { FaLinkedin,FaGithubSquare  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ButtonButton from "./ButtonButton";
import { Card } from "flowbite-react";
const Hero = () => {
    return (
        <Card className="mb-5 bg-white/10 backdrop-blur-sm">
        <div className="flex gap-2 justify-between items-center">
            <div className="flex flex-col gap-3">
                <p className="text-xl text-white font-semibold">Hi,I am <span className="text-purple-500 font-bold text-4xl ">Huzaifa</span></p>
                <p className="text-4xl tracking-widest text-white"><span className="text-purple-500 font-semibold">FullStack</span> <span className="text-xl">Developer</span></p>
                <p className="text-gray-300 italic">I'm Md. Huzaifa, a Fullstack Developer proficient in Django, Flask, Express, React, MySQL, and MongoDB. I graduated with a Bachelor's in Computer Science from East West University in May 2023. Based in Bangladesh, I'm actively seeking job opportunities to apply my skills in innovative projects. My focus is on delivering efficient solutions and contributing to dynamic teams. Excited about the next challenge!</p>
                <div className="flex gap-5">
                    <ButtonButton link="http://www.linkedin.com/in/434-md-huzaifa" icon={<FaLinkedin />} title="LinkedIn" />
                    <ButtonButton link="mailto:saadhuzaifa2497@gmail.com" icon={<IoMdMail />} title="Mail" />
                    <ButtonButton link="https://github.com/434huzaifa?tab=repositories" icon={<FaGithubSquare />} title="Github" />
                </div>
            </div>
            <div className="flex justify-end w-full">
                <img src="/round.png" alt="" />
            </div>
            
        </div>
        </Card>
    );
};

export default Hero;