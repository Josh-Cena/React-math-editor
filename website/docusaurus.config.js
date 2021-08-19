/* eslint-disable @typescript-eslint/no-var-requires */
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'React math editor',
  tagline: 'Dinosaurs are cool',
  url: 'https://joshcena.com',
  baseUrl: '/react-math-editor/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Josh-Cena',
  projectName: 'react-math-editor',
  themeConfig: {
    navbar: {
      title: 'React Math Editor',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Demo',
              to: '/demo',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'My website',
              href: 'https://joshcena.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Josh-Cena',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sida Chen. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: '../docs',
          routeBasePath: '/',
          editUrl: 'https://github.com/Josh-Cena/react-math-editor/edit/master/docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
