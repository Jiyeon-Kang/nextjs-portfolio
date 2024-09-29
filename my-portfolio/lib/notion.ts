import {Client} from '@notionhq/client';

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const notionDatabase = {
    databases: {
        query: (params: { database_id: string }) => notion.databases.query(params)
    }
};