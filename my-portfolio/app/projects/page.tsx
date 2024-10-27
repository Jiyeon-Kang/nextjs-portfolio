import Image from 'next/image';
import Header from "../components/header";
import Footer from "../components/footer";
import { notionDatabase } from 'lib/notion';
import ProjectItem from "../components/projects/projects-item";
import { PageObjectResponse, PartialDatabaseObjectResponse, DatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints';

interface ProjectData {
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

export default async function Projects() {
    let projectData: ProjectData[] = [];

    try {
        if (!process.env.NOTION_DATABASE_ID) {
            throw new Error('No database Id');
        }

        const db = await notionDatabase.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
        });

        projectData = db.results
            .map((item): ProjectData | null => {
                if ('properties' in item && item.object === 'page') {
                    const properties = item.properties as Record<string, any>;

                    const title = properties.name?.title?.map((text: { plain_text: string }) => text.plain_text).join(' ') || 'Untitled';
                    const description = properties.Description?.url || '';
                    const tags = properties.Tags?.multi_select?.map((tag: { name: string }) => tag.name) || [];
                    const workPeriod = {
                        startDate: properties.WorkPeriod?.date?.start || '',
                        endDate: properties.WorkPeriod?.date?.end || ''
                    };
                    const participatingText = properties.Participating?.rich_text?.map((text: { plain_text: string }) => text.plain_text).join('') || '';
                    const participating = parseInt(participatingText, 10) || 0;

                    const coverImage = item.cover?.type === 'external' ? item.cover.external.url : '';

                    return {
                        title,
                        description,
                        tags,
                        workPeriod,
                        participating,
                        coverImage,
                    };
                }

                return null;
            })
            .filter((item): item is ProjectData => item !== null);
        console.log('Extracted project data:', projectData);

    } catch (error) {
        console.error('Error fetching data from Notion:', error);
        return <main>Error</main>;
    }

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6">
                <main>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
                        {projectData.length > 0 ? (
                            projectData.map((item, index) => (
                                <div key={index}>
                                    <ProjectItem
                                        coverImage={item.coverImage}
                                        title={item.title}
                                        description={item.description}
                                        tags={item.tags}
                                        workPeriod={item.workPeriod}
                                        participating={item.participating}
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No data found</p>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}
