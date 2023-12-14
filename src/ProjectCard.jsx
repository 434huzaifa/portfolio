import { Card } from "flowbite-react";

const ProjectCard = ({ image, title, description, tech,live,repo }) => {
    return (
        <Card className="bg-transparent backdrop-blur-sm">
            {
                image != null && <div className="flex justify-center">
                    <img src={image} alt="" className="w-60" />
                </div>
            }

            <p className="text-4xl font-bold text-slate-300">{title}</p>
            <p className="text-xl italic text-slate-300">{description}</p>
            <div className="flex gap-2 justify-between">
                {
                    tech.map((x, index) => (
                        <span className="text-3xl text-gray-300" key={index}>{x}</span>
                    ))
                }
            </div>
            <div className="flex gap-2">
                <a target="_blank" rel="noreferrer" href={repo} className="text-slate-300 px-5 py-2 rounded border hover:bg-slate-300 hover:text-black">Repository</a>
                <a target="_blank" rel="noreferrer" href={live} className="text-slate-300 px-5 py-2 rounded border hover:bg-slate-300 hover:text-black">Live</a>
            </div>
        </Card>
    );
};

export default ProjectCard;