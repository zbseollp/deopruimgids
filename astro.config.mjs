import { defineConfig } from "astro/config";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  site: "https://deopruimgids.nl",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
});
