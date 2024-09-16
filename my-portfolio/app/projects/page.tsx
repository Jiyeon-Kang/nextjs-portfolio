// pages/projects.tsx
import Header from "../components/header";
import Footer from "../components/footer";
import {notionDatabase} from 'lib/notion';
import ProjectItem from "../components/projects/projects-item";

interface NotionPage {
    properties: {
        Description: {
            type: 'url';
            url: string;
        };
        Tags: {
            type: 'multi_select';
            multi_select: { name: string }[];
        };
        WorkPeriod: {
            type: 'date';
            date: {
                start: string;
                end: string;
            };
        };
        name: {
            type: 'title';
            title: { plain_text: string }[];
        };
    };
    url: string;
}

interface ProjectData {
    title: string;
    description: string;
    tags: string[];
    workPeriod: {
        startDate: string;
        endDate: string;
    };
}

export default async function Projects() {
    let projectData: ProjectData[] = [];

    try {
        if (!process.env.NOTION_DATABASE_ID) {
            throw new Error('No database Id');
        }

        const db = await notionDatabase.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
        });

        projectData = db.results.map((item: NotionPage) => {
            const title = item.properties.name.title.map(text => text.plain_text).join(' ');
            const description = item.properties.Description.url;
            const tags = item.properties.Tags.multi_select.map(tag => tag.name);
            const workPeriod = {
                startDate: item.properties.WorkPeriod.date.start,
                endDate: item.properties.WorkPeriod.date.end
            };

            return {
                title,
                description,
                tags,
                workPeriod
            };
        });

        console.log('Extracted project data:', projectData);

    } catch (error) {
        console.error('Error fetching data from Notion:', error);
        return <main>Error</main>;
    }

    return (
        <>
            <Header/>
            <main>
                {projectData.length > 0 ? (
                    projectData.map((item, index) => (
                        <div key={index}>
                            <ProjectItem
                                title={item.title}
                                description={item.description}
                                tags={item.tags}
                                workPeriod={item.workPeriod}
                            />
                        </div>
                    ))
                ) : (
                    <p>No data found</p>
                )}
            </main>
            <Footer/>
        </>
    );
}
