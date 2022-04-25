import { build } from 'esbuild';

const watch = process.env.BUILD_MODE === 'watch';

build({
  entryPoints: ['src/index.tsx'],
  outfile: 'public/index.js',
  inject: ['react-shim.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  watch: {
    onRebuild: (failure) => {
      if (!failure) {
        console.log('[watch] build finished, watching for changes...');
      }
    },
  },
}).then(() => {
  console.log('[watch] build finished, watching for changes...');
});
