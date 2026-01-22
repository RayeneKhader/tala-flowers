import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/tala-flowers/", // <-- NOM DU REPO ICI
  logLevel: "error",
  plugins: [react()],
});
