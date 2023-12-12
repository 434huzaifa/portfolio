import { DiJavascript } from "react-icons/di";
import { FaPython,FaHtml5,FaCss3Alt   } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiFlask,SiExpress,SiReact,SiMongodb ,SiMysql,SiFirebase     } from "react-icons/si";
const TechStack = () => {
    const tehcs=[
    <DiJavascript/>,
    <FaPython/>,
    <FaHtml5/>,
    <FaCss3Alt/>,
    <SiFlask/>,
    <SiExpress/>,
    <SiReact/>,
    <SiMongodb/>,
    <SiMysql/>,
    <SiFirebase/>,
    <FaGitAlt/>,
]
    return (
        <div className="flex gap-5 justify-center items-center p-5 flex-wrap">
            {
                tehcs.map((x,index)=>(
                    <span className="text-6xl">{x}</span>
                ))
            }

        </div>
    );
};

export default TechStack;