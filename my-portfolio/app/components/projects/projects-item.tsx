import Image from 'next/image';

interface ProjectItemProps {
    title: string;
    description: string;
    tags: string[];
    workPeriod: {
        startDate: string;
        endDate: string;
    };
    participating: number;
    coverImage: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, tags, workPeriod, participating, coverImage }) => {
    const displayImage = coverImage || '/images/no-image-available.png';

    return (
        <div className="project-card">
            <Image
                src={displayImage}
                alt={`${title} cover`}
                className="w-full rounded-md mb-4 rounded-t-xl"
                layout="responsive"
                width={500}
                height={300}
                objectFit="cover"
            />
            <div className="flex flex-col p-4">
                <h1>{title}</h1>
                <p>Description: <a className="hover:underline hover:text-blue-400" href={description} target="_blank" rel="noopener noreferrer">{description}</a></p>
                <p>Tags:
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block px-2 py-1 mr-2 mb-1 rounded-md bg-sky-200 dark:bg-sky-700"
                        >
                            {tag}
                        </span>
                    ))}
                </p>
                <p>Work Period: {workPeriod.startDate} - {workPeriod.endDate}</p>
                <p>Participating: {participating}</p>
            </div>
        </div>
    );
};

export default ProjectItem;
