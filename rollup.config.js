import { terser } from "rollup-plugin-terser"

export default [{
  input: 'src/ethaddressbook.js',
  output: [
    {
      file: 'dist/lib.ethaddressbook-cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [terser()]
},{
  input: 'src/ethaddressbook.js',
  output: [
    {
      file: 'dist/lib.ethaddressbook.js',
      format: 'iife',
      name: 'ethAddressBook'
    }
  ],
  plugins: [terser()]
}];