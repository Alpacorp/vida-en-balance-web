import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@pages": "/src/pages",
      "@containers": "/src/containers",
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@public": "/public",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
    },
  },
});
