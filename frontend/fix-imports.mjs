
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getFiles(dir) {
    const subdirs = await fs.promises.readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = path.resolve(dir, subdir);
        const stat = await fs.promises.stat(res);
        if (stat.isDirectory()) {
            if (subdir === 'node_modules' || subdir === '.git' || subdir === 'dist' || subdir === '.gemini') return [];
            return getFiles(res);
        }
        return res;
    }));
    return files.reduce((a, f) => a.concat(f), []);
}

async function fixImports(filePath) {
    const ext = path.extname(filePath);
    if (ext !== '.js' && ext !== '.jsx') return;

    try {
        let content = await fs.promises.readFile(filePath, 'utf8');
        let originalContent = content;

        // Replace .tsx with .jsx and .ts with .js in imports/exports
        // Regex to match import/export statements ending with .ts" or .ts' or .tsx" or .tsx'
        // We match quotes, filename, extension, same quote.

        // Match .tsx
        content = content.replace(/from\s+['"]([^'"]+)\.tsx['"]/g, (match, p1) => {
            return `from "${p1}.jsx"`;
        });
        content = content.replace(/import\s+['"]([^'"]+)\.tsx['"]/g, (match, p1) => { // import "foo.tsx"
            return `import "${p1}.jsx"`;
        });

        // Match .ts
        content = content.replace(/from\s+['"]([^'"]+)\.ts['"]/g, (match, p1) => {
            return `from "${p1}.js"`;
        });
        content = content.replace(/import\s+['"]([^'"]+)\.ts['"]/g, (match, p1) => {
            return `import "${p1}.js"`;
        });

        // Also async imports? import(...)

        if (content !== originalContent) {
            console.log(`Fixing imports in: ${filePath}`);
            await fs.promises.writeFile(filePath, content);
        }
    } catch (e) {
        console.error(`Failed to fix ${filePath}:`, e);
    }
}

async function main() {
    const rootDir = process.cwd();
    console.log(`Scanning ${rootDir} for import fixes...`);

    const allFiles = await getFiles(rootDir);

    const jsFiles = allFiles.filter(f => f.endsWith('.js') || f.endsWith('.jsx'));

    for (const file of jsFiles) {
        await fixImports(file);
    }

    console.log('Import fix complete!');
}

main().catch(console.error);
