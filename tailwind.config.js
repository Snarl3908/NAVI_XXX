/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 使用系统字体或其他 webfont
        sans: ['system-ui', 'sans-serif'],
        // 如果要使用 Geist，应该使用 CDN 版本
        // sans: ['Geist', 'system-ui', 'sans-serif'],
      },
    },
  },
  // ... 其他配置
}; 