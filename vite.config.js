import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const projectsSource = resolve('resources/js/data/openSourceProjects.json');
const outputFileName = 'open-source-projects.json';

async function projectsWithGithubStars() {
    const projects = structuredClone(JSON.parse(readFileSync(projectsSource, 'utf8')));
    await Promise.all(
        projects.map(async (p) => {
            if (!p.repo) {
                return;
            }
            try {
                const res = await fetch(`https://api.github.com/repos/${p.repo}`, {
                    headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'radiancelux-site-build' },
                });
                if (res.ok) {
                    const data = await res.json();
                    p.stars = data.stargazers_count ?? p.stars ?? 0;
                }
            } catch {
                /* offline build keeps committed star values */
            }
        }),
    );
    return projects;
}

function writeJson(path, data) {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`);
}

function githubStarsOutputPlugin() {
    return {
        name: 'github-stars-output',
        async configureServer() {
            const projects = await projectsWithGithubStars();
            writeJson(resolve('public', outputFileName), projects);
        },
        async closeBundle() {
            const projects = await projectsWithGithubStars();
            writeJson(resolve('dist', outputFileName), projects);
        },
    };
}

export default defineConfig({
    plugins: [githubStarsOutputPlugin(), tailwindcss(), vue()],
    resolve: {
        alias: {
            '@': resolve('resources/js'),
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    publicDir: 'public',
});
