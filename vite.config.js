import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/dev-stack-builder-test/",
  plugins: [react()],
});
