import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

function injectGithubStars() {
    return {
        name: 'inject-github-stars',
        async buildStart() {
            const out = resolve('resources/js/data/openSourceProjects.json');
            const defaults = [
                {
                    name: 'PR Genie',
                    repo: 'radiancelux/prgenie',
                    url: 'https://github.com/radiancelux/prgenie',
                    description:
                        'Local review of AI coding-agent work before it reaches GitHub. Git-native local PRs on worktrees, CLI, VS Code/Cursor extension, and MCP plugin.',
                    stack: 'TypeScript monorepo',
                    stars: 0,
                },
                {
                    name: 'flutter_ble_peripheral',
                    repo: 'radiancelux/flutter_ble_peripheral',
                    url: 'https://github.com/radiancelux/flutter_ble_peripheral',
                    description:
                        'Flutter package for BLE advertising in peripheral mode. Pairs with the BLE Proximity Detection white paper on this site.',
                    stack: 'Flutter, Dart',
                    stars: 0,
                    whitepaper: '/whitepapers/BLE_Proximity_Detection_White_Paper.html',
                },
                {
                    name: 'go-server',
                    repo: 'radiancelux/go-server',
                    url: 'https://github.com/radiancelux/go-server',
                    description: 'A simple Go HTTP server starter.',
                    stack: 'Go',
                    stars: 0,
                },
                {
                    name: 'swarmDraft',
                    repo: 'southline-tech/swarmDraft',
                    url: 'https://github.com/southline-tech/swarmDraft',
                    description:
                        'Open-source, bot-native desktop manuscript editor for novelists (Tauri, Windows first).',
                    stack: 'Tauri, TypeScript',
                    stars: 0,
                },
                {
                    name: 'botVault',
                    repo: 'southline-tech/botvault',
                    url: 'https://github.com/southline-tech/botvault',
                    description:
                        'Drive-backed MCP vault that gives bots shared, attributable project state, with per-bot tokens and version history.',
                    stack: 'Go',
                    stars: 0,
                },
            ];

            const projects = structuredClone(defaults);
            await Promise.all(
                projects.map(async (p) => {
                    try {
                        const res = await fetch(`https://api.github.com/repos/${p.repo}`, {
                            headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'radiancelux-site-build' },
                        });
                        if (res.ok) {
                            const data = await res.json();
                            p.stars = data.stargazers_count ?? p.stars;
                        }
                    } catch {
                        /* offline build keeps defaults */
                    }
                }),
            );

            writeFileSync(out, `${JSON.stringify(projects, null, 2)}\n`);
        },
    };
}

export default defineConfig({
    plugins: [injectGithubStars(), tailwindcss(), vue()],
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
