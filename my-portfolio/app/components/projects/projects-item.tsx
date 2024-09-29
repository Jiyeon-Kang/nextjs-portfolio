// components/projects/projects-item.tsx
interface ProjectItemProps {
    title: string;
    description: string;
    tags: string[];
    workPeriod: {
        startDate: string;
        endDate: string;
    };
    participating:number;
    coverImage: string | null;
}

const ProjectItem: React.FC<ProjectItemProps> = ({title, description, tags, workPeriod, participating,coverImage}) => {
    return (
        <div className="flex flex-col p-6 bg-slate-400 rounded-md my-5">
            {coverImage && (
                <img src={coverImage} alt={`${title} cover`} className="w-full h-auto rounded-md mb-4" />
                )}
            <h1>{title}</h1>
            <p>Description: <a href={description} target="_blank" rel="noopener noreferrer">{description}</a></p>
            <p>Tags: {tags.join(', ')}</p>
            <p>Work Period: {workPeriod.startDate} - {workPeriod.endDate}</p>
            <p>Participating: {participating}</p>
        </div>
    );
};

export default ProjectItem;
