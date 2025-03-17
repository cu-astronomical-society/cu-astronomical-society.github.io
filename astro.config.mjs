// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://cu-astronomical-society.github.io",
    base: "/website",
    vite: {
        plugins: [tailwindcss()],
      },
});