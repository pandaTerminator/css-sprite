var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src('src/images/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    imgPath: '../../sprite.png'
  }));
  return spriteData.pipe(gulp.dest('output/'));
});
