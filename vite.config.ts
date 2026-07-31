// defineConfig comes from vitest/config rather than vite so the `test` block is
// typed. Vitest then reuses the `resolve` aliases instead of duplicating them.
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

// The bundle report is opt-in: `npm run build:analyze`.
// It is written outside dist/ so it never ships alongside the site.
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Nginx serves these .gz files directly (gzip_static on in nginx.conf).
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
  // The footer used to read the year from the visitor's clock. Every route is
  // prerendered, so the HTML carries the year the build ran while the browser
  // computed today's — identical all year, different on the first of January,
  // and a hydration mismatch throws away the whole tree and re-renders it on
  // the client for every visitor until the next deploy.
  //
  // Baking it here keeps both renders in agreement, and it is the more honest
  // value anyway: a copyright year states when the work was last published,
  // which is the day this built, not the day someone happens to read it.
  define: {
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@content": "/src/content",
      "@config": "/src/config",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@public": "/public",
      "@routes": "/src/routes",
      "@test": "/src/test",
      "@ui": "/src/ui",
      "@utils": "/src/utils",
      "@interfaces": "/src/interfaces",
    },
  },
  build: {
    // Vite 8 bundles with Rolldown and minifies with Oxc. Asking for "esbuild"
    // takes a deprecated path that now needs esbuild installed separately, so
    // the default minifier is used instead.
    minify: true,
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Dependencies change far less often than the site content, so
        // isolating them keeps the chunk cached across deploys. The previous
        // version listed "react-dom" while the app imports "react-dom/client",
        // producing an empty chunk and bundling React into the entry.
        manualChunks(id) {
          if (id.includes("node_modules")) return "vendor";
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: false,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      // Content is flat data and .d.ts files have no runtime.
      exclude: [
        "src/content/**",
        "src/test/**",
        "src/**/*.d.ts",
        "src/main.tsx",
      ],
    },
  },
}));