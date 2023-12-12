import ProjectCard from "./ProjectCard";
import { FaReact, FaCcStripe } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb,SiFirebase,SiDjango,SiMysql ,SiJquery    } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
const Projects = () => {
    const projects = [
        {
            image: "/survey.png",
            title: "SurveysSphere",
            description: "A simple website for participate and making survey.",
            tech: [
                <FaCcStripe />,
                <FaReact />,
                <SiTailwindcss />,
                <SiExpress />,
                <SiMongodb />,
                <SiFirebase  />,
            ]
        },
        {
            image: "/Job.png",
            title: "Job The Chakri",
            description: "A simple website for posting and managing job.",
            tech: [
                <FaReact />,
                <SiTailwindcss />,
                <SiExpress />,
                <SiMongodb />,
                <SiFirebase  />,
            ]
        },
        {
            image: "/techtronics.png",
            title: "Techtronics",
            description: "A simple online shop for Electronics gadget",
            tech: [
                <FaReact />,
                <SiTailwindcss />,
                <SiExpress />,
                <SiMongodb />,
                <SiFirebase  />,
            ]
        },
    ]
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                projects.map((x, index) => (
                    <ProjectCard key={index} image={x.image} title={x.title} description={x.description} tech={x.tech} ></ProjectCard>
                ))
            }
        </div>
    );
};

export default Projects;