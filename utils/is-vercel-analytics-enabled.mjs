import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const isVercelAnalyticsEnabled = async () => {
    try {
        const file = await readFile(join(__dirname, '../.vercel/project.json'));
        const project = JSON.parse(file);
        return !!project.settings.analyticsId;
    } catch {
        return false;
    }
};
