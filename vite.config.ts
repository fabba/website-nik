import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss(),
],
  // GitHub Pages serves the site at https://<user>.github.io/website-nik/
  // use the repo name (with hyphen) as the base so absolute paths like
  // `/home/Nik_hompage.png` resolve correctly after build.
  base: "/website-nik/",
})