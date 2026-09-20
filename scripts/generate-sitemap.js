import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");

const dataFile = path.join(projectRoot, "src", "components", "data_structure.jsx");
const publicDir = path.join(projectRoot, "public");
const sitemapFile = path.join(publicDir, "sitemap.xml");

const baseUrl = "https://anime-vault-com.vercel.app";

const data = fs.readFileSync(dataFile, "utf8");

// Get all wallpaper IDs from data_structure.jsx
const ids = [...data.matchAll(/\bid\s*:\s*(\d+)/g)]
    .map(match => Number(match[1]))
    .sort((a, b) => a - b);

const urls = [
    "/",
    "/social",
    ...ids.map(id => `/preview/${id}`)
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `    <url>
        <loc>${baseUrl}${url}</loc>
    </url>`).join("\n")}
</urlset>
`;

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapFile, sitemap);

console.log(`Sitemap generated with ${urls.length} URLs.`);