import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://nadimalid.github.io',
    base: '/sunnyside-agency-landingpage',
    integrations: [tailwind()]
});