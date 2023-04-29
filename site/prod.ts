import { ensureDir, copy, walkSync } from "https://deno.land/std@0.185.0/fs/mod.ts";

console.info("Building site CSS...");
const twind = `./twind-${Deno.build.os}`

const t = Deno.run({ cmd: [twind , "-i", "./styles/input.css", "-o", "./styles/output.css", "--minify"] });

t.close();

console.info("Copying site files...");
ensureDir("../dist/styles");
copy("./styles/output.css", "../dist/styles/output.css");

for (const entry of walkSync("./pages")) {
	if (entry.isFile) {
		const pageName = entry.path.replace("pages/", "").replace(".html", "");
		copy(entry.path, `../dist/${pageName}.tmpl`);
	}
}

for (const entry of walkSync("./assets")) {
	if (entry.isFile) {
		copy(entry.path, `../dist/${entry.path.replace("assets/", "")}`);
	}
}

console.info("Done!");
