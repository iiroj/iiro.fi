import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const vercelEnvFile = join(__dirname, '../.vercel/.env.production.local');

export const isVerceWeblAnalyticsEnabled = async () => {
    try {
        const file = await readFile(vercelEnvFile, 'utf-8');
        return file.includes('VERCEL_WEB_ANALYTICS_ID');
    } catch {
        return false;
    }
};
