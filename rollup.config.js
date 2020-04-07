import svelte from 'rollup-plugin-svelte';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/stylesheetSwitcher.svelte',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'StylesheetSwitcher',
    file: 'public/dist/sss.js'
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      // css: css => {
      //   css.write('public/build/bundle.css');
      // },
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
  // We need this becuase we will use the --silent config flag to execute the build
  onwarn(warning, warn) {
    // Use default for everything else
    warn(warning);
  },

};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        //
        require('child_process').spawn('npm', ['run', 'serve', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        });
      }
    },
  };
}
