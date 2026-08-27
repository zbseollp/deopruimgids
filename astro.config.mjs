import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://deopruimgids.nl",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
});
