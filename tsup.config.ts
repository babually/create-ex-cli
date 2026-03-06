import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    sourcemap: true,
    outExtension({ format }) {
        return { js: '.mjs' };
    },
    // copy the templates folder into the output so the CLI can find them at
    // runtime without shipping the whole src directory.
    publicDir: 'src/templates',
    clean: true,
})