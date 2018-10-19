const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const isProgressive = require("is-progressive");
const ls = require("ls");
const copy = require("copy");

const PNGImages = "public/uploads/*.png";
const JPEGImages = "public/uploads/*.jpg";
const RestGlob = "public/uploads/*.!(jpg|png)";
const output = "public/media";

const getJPEG = () =>
  new Promise(res => {
    const JPEGs = ls(JPEGImages);
    res(JPEGs.map(j => j.full));
  });
const getNonProgressiveImages = async images => {
  const progressives = await Promise.all(images.map(isProgressive.file));
  return images.filter((_, index) => !progressives[index]);
};

const optimiseJPEGImages = images =>
  imagemin(images, output, {
    plugins: [
      imageminMozjpeg({
        quality: 70
      })
    ]
  });

const optimisePNGImages = () =>
  imagemin([PNGImages], output, {
    plugins: [imageminPngquant({ quality: "65-80" })]
  });

const copyRest = () =>
  new Promise((res, rej) => {
    copy(RestGlob, "public/media", (err, file) => (err ? rej(err) : res(file)));
  });

getJPEG()
  .then(getNonProgressiveImages)
  .then(optimiseJPEGImages)
  .then(optimisePNGImages)
  .then(copyRest)
  .catch(error => console.log(error));
