import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			dts: true,
			include: [/\.vue$/, /\.vue\?vue/, /\.[tj]sx?$/],
			imports: ["vue", "vue-i18n", "vitest"],
			dirs: ["./src", "./i18n", "./lib", "./public"],
		}),
		Components({
			dts: true,
			dirs: ["src/components", "src/views"],
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
