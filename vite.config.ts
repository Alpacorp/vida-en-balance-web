import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "./src/components",
      "@styles": "./src/styles",
      "@utils": "./src/utils",
      "@hooks": "./src/hooks",
      "@context": "./src/context",
      "@assets": "./src/assets",
    },
  },
});
