// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const fs = require("fs");

function reverseSidebarItems(items) {
    const result = items.map((item) => {
        if (item.type === 'category') {
            return {...item, items: reverseSidebarItems(item.items)};
        }
        return item;
    });
    result.reverse();
    return result;
}


/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'QUT - Data Science Kiosk',
    tagline: 'Practice Enhancement: A Data Science Kiosk for Sports',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://eresearchqut.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/data-science-kiosk/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'QUT', // Usually your GitHub org/user name.
    projectName: 'data-science-kiosk', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [
        require.resolve('@cmfcmf/docusaurus-search-local'),
        [
            './plugins/docs-plugin',
            {
                sidebarPath: require.resolve('./sidebars.js'),
                docItemComponent: '@site/src/components/docs/docItem.tsx',
                path: "./docs",
                editCurrentVersion: false,
                editLocalizedFiles: false,
                routeBasePath: "docs",
                tagsBasePath: "tags",
                include: [
                    "**/*.{md,mdx}"
                ],
                exclude: [
                    "**/_*.{js,jsx,ts,tsx,md,mdx}",
                    "**/_*/**",
                    "**/*.test.{js,jsx,ts,tsx}",
                    "**/__tests__/**"
                ],
                sidebarCollapsible: true,
                sidebarCollapsed: true,
                docLayoutComponent: "@theme/DocPage",
                docTagsListComponent: "@theme/DocTagsListPage",
                docTagDocListComponent: "@theme/DocTagDocListPage",
                docCategoryGeneratedIndexComponent: "@theme/DocCategoryGeneratedIndexPage",
                remarkPlugins: [],
                rehypePlugins: [],
                beforeDefaultRemarkPlugins: [],
                beforeDefaultRehypePlugins: [],
                admonitions: true,
                showLastUpdateTime: false,
                showLastUpdateAuthor: false,
                includeCurrentVersion: true,
                disableVersioning: false,
                versions: {},
                breadcrumbs: true,
                id: "default"
            }
        ],
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                // docs: {
                //     sidebarPath: require.resolve('./sidebars.js'),
                //     docItemComponent: '@site/src/components/docs/docItem.tsx'
                // },
                blog: {
                    showReadingTime: false,
                    path: './about',
                    routeBasePath: 'about'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                }
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Data Science Kiosk',
                logo: {
                    alt: 'QUT Logo',
                    src: 'img/logo.png',
                },
                items: [
                    // {
                    //     type: 'docSidebar',
                    //     sidebarId: 'kioskSidebar',
                    //     position: 'left',
                    //     label: 'Kiosk',
                    // },
                    {to: '/about', label: 'About', position: 'left'}
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Kiosk',
                        items: [
                            {
                                label: 'Using the Kiosk',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Queensland University of Technology',
                                href: 'https://www.qut.edu.au',
                            }
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'About',
                                to: '/about',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/eresearchqut/data-science-kiosk',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} QUT, Inc. Built by eResearch QUT.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
