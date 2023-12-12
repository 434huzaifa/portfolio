import { Card } from "flowbite-react";

const ProjectCard = ({ image, title, description, tech }) => {
    return (
        <Card className="bg-white/10 backdrop-blur-sm">
            {
                image != null && <div className="flex justify-center">
                    <img src={image} alt="" className="w-60" />
                </div>
            }

            <p className="text-4xl font-bold">{title}</p>
            <p className="text-xl italic font-thin">{description}</p>
            <div className="flex gap-2 justify-between">
                {
                    tech.map((x, index) => (
                        <span className="text-2xl" key={index}>{x}</span>
                    ))
                }
            </div>
        </Card>
    );
};

export default ProjectCard;