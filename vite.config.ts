import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@content": "/src/content",
      "@config": "/src/config",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@public": "/public",
      "@routes": "/src/routes",
      "@ui": "/src/ui",
      "@utils": "/src/utils",
      "@interfaces": "/src/interfaces",
    },
  },
});
