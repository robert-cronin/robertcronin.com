import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Robert Cronin',
  tagline: 'Senior Software Engineer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.robertcronin.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'robert-cronin', // Usually your GitHub org/user name.
  projectName: 'robertcronin.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/robert-cronin/robertcronin.com/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Robert Cronin',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/robert-cronin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/7644072/robbie-cronin',
            },
            {
              label: 'Code Wars',
              href: 'https://www.codewars.com/users/robert-cronin',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/robert-cronin/robertcronin.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Robert Cronin. Built with Docusaurus. <a href="/rasberry-pi-k8s-cluster">Hosted on MicroK8s</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
