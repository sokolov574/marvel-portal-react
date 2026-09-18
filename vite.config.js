import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves the app from /marvel-portal-react/, Vercel from the root.
const base = process.env.VERCEL ? "/" : "/marvel-portal-react/";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
});
