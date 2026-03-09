import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "src",

    title: "LostEngine",
    description: "Paper Plugin",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Docs', link: '/introduction/introduction'}
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    {text: 'Introduction', link: '/introduction/introduction'},
                    {text: 'Getting Started', link: '/introduction/getting-stated'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/LostEngine/LostEngine'},
            {icon: 'discord', link: 'https://discord.gg/5VSeDcyJt7'},
        ],

        search: {
            provider: 'local'
        }
    }
})
