import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
    plugins: [
        react(),
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: "gzip",
            ext: ".gz",
        }),
        visualizer({
            filename: "./dist/report.html",
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
                manualChunks: {
                    react: ["react", "react-dom"],
                },
            },
        },
    },
});
