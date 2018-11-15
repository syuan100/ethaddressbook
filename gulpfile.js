const { src, dest } = require('gulp')
const rename = require('gulp-rename')
const concat = require('gulp-concat')

exports.default = function(){
  return src(['src/ethaddressbook.node.js', 'src/ethaddressbook.js'])
    .pipe(concat('ethaddressbook.cjs.js'))
    .pipe(dest('src/'))
}