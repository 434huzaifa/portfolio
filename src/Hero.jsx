import { FaLinkedin,FaGithubSquare  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ButtonButton from "./ButtonButton";
const Hero = () => {
    return (
        <div className="flex gap-2 justify-between items-center">
            <div>
                <p className="text-4xl font-semibold">Hi,I am <span className="text-purple-500 font-bold">Huzaifa</span></p>
                <p className="text-2xl tracking-widest"><span className="text-purple-500 font-semibold">FullStack</span> Developer</p>
                <p>Hi, i am Md. Huzaifa. I am a fullstack Developer with profficiency in Django</p>
                <div className="flex gap-5">
                    <ButtonButton link="http://www.linkedin.com/in/434-md-huzaifa" icon={<FaLinkedin />} title="LinkedIn" />
                    <ButtonButton link="mailto:saadhuzaifa2497@gmail.com" icon={<IoMdMail />} title="Mail" />

                    <ButtonButton link="https://github.com/434huzaifa?tab=repositories" icon={<FaGithubSquare />} title="Github" />
                </div>
            </div>
            <div className="flex-1 flex justify-end ">
                <img src="/round.png" alt="" className="w-[65%]" />
            </div>
            
        </div>
    );
};

export default Hero;