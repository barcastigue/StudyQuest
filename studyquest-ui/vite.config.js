import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// styles.css starts with `@import "tailwindcss"` (its reset is part of the design), so keep the plugin.
// To serve the build from Spring Boot, uncomment outDir below and run `npm run build`.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // build: { outDir: "../studyquest/src/main/resources/static", emptyOutDir: true },
});
