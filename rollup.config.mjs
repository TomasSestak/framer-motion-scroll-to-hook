import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import external from 'rollup-plugin-peer-deps-external'

import pkg from './package.json' assert { type: "json" };

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      dir: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    url({ exclude: ['**/*.svg'] }),
    resolve(),
    typescript(),
    commonjs({ extensions: ['.js', '.ts'] })
  ]
}
