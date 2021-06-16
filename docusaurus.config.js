/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Tuxbot Wiki',
    tagline: 'Wiki page for Tuxbot',
    url: 'https://tuxbot.gnous.eu',
    baseUrl: '/wiki/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'GnousEU', // Usually your GitHub org/user name.
    projectName: 'Tuxbot-wiki', // Usually your repo name.
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
        },
        navbar: {
            title: 'Tuxbot Wiki',
            items: [
                {
                    type: 'localeDropdown',
                    position: 'right'
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/commands',
                        },
                    ],
                },
                {
                    title: 'Useful',
                    items: [
                        {
                            label: 'Discord',
                            href: 'http://127.0.0.1:3000/support',
                        },
                        {
                            label: 'Dashboard',
                            href: 'http://127.0.0.1:3000/dashboard',
                        },
                    ],
                },
                {
                    title: 'Github',
                    items: [
                        {
                            label: 'Tuxbot',
                            href: 'https://github.com/Romain-J/tuxbot-bot',
                        },
                        {
                            label: 'Website',
                            href: 'https://github.com/Romain-J/tuxbot-web',
                        },
                        {
                            label: 'Wiki',
                            href: 'https://github.com/Romain-J/tuxbot-wiki',
                        },
                    ],
                },
            ],
            copyright: `© ${new Date().getFullYear()} GnousEU | Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    editUrl: 'https://github.com/Rom1-J/tuxbot-wiki/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr'],
        localeConfigs: {
            en: {
                label: 'English'
            },
            fr: {
                label: 'Français'
            }
        }
    }
};
