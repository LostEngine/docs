import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "src",

    title: "LostEngine",
    description: "Paper Plugin",
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Docs', link: '/introduction/introduction'}
        ],

        logo: "/logo.png",

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    {text: 'Introduction', link: '/introduction/introduction'},
                    {text: 'Getting Started', link: '/introduction/getting-stated'},
                ]
            },
            {
                text: 'General',
                items: [
                    {text: 'Web Server', link: '/general/web-server'},
                    {text: 'Web Editor', link: '/general/web-editor'},
                    {text: 'Custom Materials Injection', link: 'general/custom-materials-injection'}
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
