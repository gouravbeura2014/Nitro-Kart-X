import { defineConfig } from "vite";

export default defineConfig({
    server: {
        host: true,
        port: 5173,
        open: true
    },

    preview: {
        host: true,
        port: 4173
    },

    build: {
        outDir: "dist",
        assetsDir: "assets",
        sourcemap: true,
        emptyOutDir: true,

        rollupOptions: {
            output: {
                manualChunks: {
                    phaser: ["phaser"]
                }
            }
        }
    },

    resolve: {
        alias: {
            "@": "/src"
        }
    }
});
