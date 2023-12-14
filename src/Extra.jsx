import { Card } from "flowbite-react";
import { SiMysql, SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
const Extra = () => {
    return (
        <Card className="my-5 bg-transparent backdrop-blur-sm">
            <div className="flex md:flex-row flex-col gap-4">
                <div className="flex-1">
                    <p className="italic text-slate-200 underline">Experience</p>
                    <p className="text-2xl font-semibold text-slate-300"><span >Backend Developer</span></p>
                    <a className="underline italic text-lg text-blue-400" href="https://arenawebsecurity.net/">Arena Web Security</a> 
                    <div className="flex gap-5 text-3xl text-slate-300">
                        <span> <FaPython /> </span>
                        <span>  <SiDjango /> </span>
                        <span>  <SiMysql /></span>
                    </div>
                </div>
                
                <div className="flex-1">
                <p className="italic text-slate-200 underline">Education</p>
                <p className="text-2xl font-semibold text-slate-300">Bachelor Degree in Computer Science</p>
                <p className="text-lg italic text-slate-300">East West University (EWU)</p>
                </div>
            </div>
        </Card>
    );
};

export default Extra;