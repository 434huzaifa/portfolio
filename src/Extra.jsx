import { Card } from "flowbite-react";
import { SiMysql, SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
const Extra = () => {
    return (
        <Card className="my-5 bg-white/10 backdrop-blur-sm">
            <div className="flex">
                <div className="flex-1">
                    <p className="text-xl font-bold">Experience</p>
                    <p className="text-lg font-semibold"><span >Backend Developer</span></p>
                    <a className="underline italic text-lg text-blue-400" href="https://arenawebsecurity.net/">Arena Web Security</a> 
                    <div className="flex gap-5 text-3xl">
                        <span> <FaPython /> </span>
                        <span>  <SiDjango /> </span>
                        <span>  <SiMysql /></span>
                    </div>
                </div>
                
                <div className="flex-1">
                <p className="text-xl font-bold">Education</p>
                <p className="text-lg font-semibold">Bachelor Degree in Computer Science</p>
                <p className="text-lg italic">East West University (EWU)</p>
                </div>
            </div>
        </Card>
    );
};

export default Extra;