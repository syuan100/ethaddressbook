import { terser } from "rollup-plugin-terser"

export default [{
  input: 'src/ethaddressbook.cjs.js',
  output: [
    {
      file: 'dist/ethaddressbook-cjs.min.js',
      format: 'cjs'
    }
  ],
  plugins: [terser()]
},{
  input: 'src/ethaddressbook.js',
  output: [
    {
      file: 'dist/ethaddressbook.min.js',
      format: 'iife',
      name: 'ethAddressBook'
    }
  ],
  plugins: [terser()]
},{
  input: 'src/ethaddressbook.cjs.js',
  output: [
    {
      file: 'dist/ethaddressbook-cjs.js',
      format: 'cjs'
    }
  ]  
},{
  input: 'src/ethaddressbook.js',
  output: [
    {
      file: 'dist/ethaddressbook.js',
      format: 'iife',
      name: 'ethAddressBook'
    }
  ]
}];