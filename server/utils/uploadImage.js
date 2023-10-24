const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dsdw5hrhj",
  api_key: "589243882767718",
  api_secret: "kcDWKM1Ufnjtu_2drU5VzQ12vbU",
});

const options = {
  overWrite: true,
  invalidate: true,
  recourse_type: "auto",
};

module.exports = (image) => {
  return new Promise((res, rej) => {
    cloudinary.uploader.upload(image, options, (err, result) => {
      if (result && result.secure_url) {
        return res(result.secure_url);
      }
      return rej({ msg: err.message });
    });
  });
};
