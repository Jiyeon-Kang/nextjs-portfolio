import Header from "../components/header";
import Footer from "../components/footer";
import { notionDatabase } from 'lib/notion';

export default async function Projects() {
    let db;

    try {
        if (!process.env.NOTION_DATABASE_ID) {
            throw new Error('No database Id');
        }
        db = await notionDatabase.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
        });
        console.log('Notion API Response:', db);

    } catch (error) {
        console.error('Error fetching data from Notion:', error);
        return <main>Error</main>;
    }

    return (
        <>
            <Header />
            <main>
                <pre>{JSON.stringify(db, null, 2)}</pre>
            </main>
            <Footer />
        </>
    );
}
