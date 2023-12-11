import ProjectCard from "./ProjectCard";

const Projects = () => {
    const dummyArray=[0,1,3]
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                dummyArray.map((x,index)=>(
                    <ProjectCard key={index}></ProjectCard>
                ))
            }
        </div>
    );
};

export default Projects;