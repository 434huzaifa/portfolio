import ProjectCard from "./ProjectCard";
import { FaReact, FaCcStripe } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb,SiFirebase,SiDjango,SiMysql ,SiJquery    } from "react-icons/si";
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
            ],
            repo:"https://github.com/434huzaifa/SurveysSphere-Client",
            live:"https://surveysphere-f19ed.web.app/"
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
            ],
            repo:'https://github.com/434huzaifa/Job-The-Chakri_Client',
            live:"https://job-the-chakri.web.app/"
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
            ],
            repo:'https://github.com/434huzaifa/TechTronics-Client',
            live:"https://techtronics-41c1d.web.app/"
            
        },
    ]
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 bg-transparent">
            {
                projects.map((x, index) => (
                    <ProjectCard key={index} image={x.image} title={x.title} description={x.description} tech={x.tech} live={x.live} repo={x.repo}></ProjectCard>
                ))
            }
        </div>
    );
};

export default Projects;