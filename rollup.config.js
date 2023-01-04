import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'esm',
      },
    ],
    external: [/@babel\/runtime/, 'react', 'styled-components'],
    plugins: [
      babel({
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      commonjs(),
      external(),
      resolve(),
      terser(),
    ],
  },
];
