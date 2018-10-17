const imagemin = require("imagemin");

const PNGImages = "public/images/*.png";
const JPEGImages = "public/images/*.jpg";
const output = "public/uploads";

const imageminMozjpeg = require("imagemin-mozjpeg");

const optimiseJPEGImages = () =>
  imagemin([JPEGImages], output, {
    plugins: [
      imageminMozjpeg({
        quality: 70
      })
    ]
  });

optimiseJPEGImages().catch(error => console.log(error));
