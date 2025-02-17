import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    file: 'dist/vue-datepicker.esm.js',
    format: 'esm',
  },
});

export default config;
