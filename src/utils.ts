import path from 'path';
import fs from 'fs';

export function vaildateFilePath(filePath: string): undefined | never {
    const absolutePath = path.join(process.cwd(), filePath);
    if(!fs.existsSync(absolutePath)) {
        throw new Error(`File not found: ${absolutePath}`);
    }
}