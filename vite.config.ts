import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

// El reporte del bundle es opcional: `npm run build:analyze`.
// Se escribe fuera de dist/ para que nunca se publique junto al sitio.
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Nginx sirve estos .gz directamente (gzip_static on en nginx.conf).
    viteCompression({
      verbose: false,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
    mode === "analyze" &&
      visualizer({
        filename: "./bundle-report.html",
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
  ],
  base: "/",
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
  build: {
    minify: "esbuild",
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Las dependencias cambian mucho menos que el contenido del sitio:
        // aislarlas mantiene el chunk cacheado entre deploys. La versión
        // anterior listaba "react-dom" (se importa "react-dom/client"), por lo
        // que generaba un chunk vacío y React acababa en el bundle de entrada.
        manualChunks(id) {
          if (id.includes("node_modules")) return "vendor";
        },
      },
    },
  },
}));