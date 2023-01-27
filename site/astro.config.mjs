import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
	outDir: "../dist",
	site: "https://ludoviko.ch",
	integrations: [tailwind(), vue()],
});
