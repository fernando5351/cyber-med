const cloudinary = require('cloudinary').v2;

const dataConfig = cloudinary.config({ 
    cloud_name: process.env.cloud_name,
    api_key: process.env.cloudinary_api,
    api_secret: process.env.cloudinary_key_secret 
  });

module.exports = {
  dataConfig
}