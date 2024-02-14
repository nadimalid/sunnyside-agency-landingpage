/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                barlow: "'Barlow', sans-serif",
                fraunces: "'Fraunces', serif"
            },
            colors: {
                "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
                "dark-moderate-cyan": "hsl(168, 34%, 41%)",
                "soft-red": "hsl(7, 99%, 70%)",
                "yellow": "hsl(51, 100%, 49%)",
                "dark-desaturated-blue": "hsl(212, 27%, 19%)",
                "dark-grayish-blue": "hsl(232, 10%, 55%)",
                "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
                "grayish-blue": "hsl(210, 4%, 67%)",
                "dark-blue": "hsl(198, 62%, 26%)"
            },
            backgroundImage: {
                "hero-desktop": "url('/src/images/desktop/image-header.jpg')",
                "hero-mobile": "url('/src/images/mobile/image-header.jpg')"
            }
        },
	},
	plugins: [],
}
