import { sentryVitePlugin } from '@sentry/vite-plugin'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

import { version } from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [
            react(),
            legacy({ targets: ['defaults', 'not IE 11'] }),
            env.IS_SENTRY_ENABLED &&
                sentryVitePlugin({
                    org: env.SENTRY_ORG,
                    project: env.SENTRY_PROJ,
                    sourcemaps: { assets: './dist/**' },
                    authToken: env.SENTRY_AUTH,
                    telemetry: false,
                    ext: ['js', 'jsx', 'map'],
                    deploy: { env: mode },
                    release: version,
                }),
        ],
        build: { sourcemap: true },
        resolve: {
            alias: [
                {
                    find: '@/assets',
                    replacement: resolve(__dirname, 'src/assets'),
                },
                {
                    find: '@/context',
                    replacement: resolve(__dirname, 'src/context'),
                },
                {
                    find: '@/components',
                    replacement: resolve(__dirname, 'src/components'),
                },
                {
                    find: '@/hooks',
                    replacement: resolve(__dirname, 'src/hooks'),
                },
                {
                    find: '@/layouts',
                    replacement: resolve(__dirname, 'src/layouts'),
                },
                {
                    find: '@/pages',
                    replacement: resolve(__dirname, 'src/pages'),
                },
                {
                    find: '@/route-guards',
                    replacement: resolve(__dirname, 'src/route-guards'),
                },
                {
                    find: '@/services',
                    replacement: resolve(__dirname, 'src/services'),
                },
                {
                    find: '@/theme',
                    replacement: resolve(__dirname, 'src/theme'),
                },
                {
                    find: '@/utilities',
                    replacement: resolve(__dirname, 'src/utilities'),
                },
            ],
        },
    }
})
