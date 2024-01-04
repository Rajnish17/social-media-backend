const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Function to upload a file to Cloudinary
async function uploadToCloudinary(filePath) {
  try {
    // Read the file as a buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Upload the file to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { resource_type: 'auto' },
        (error, result) => {
          if (error) {
            console.error('Error uploading to Cloudinary:', error);
            reject(error);
          } else {
            console.log('File uploaded successfully:', result);
            resolve(result);
          }
        }
      ).end(fileBuffer);
    });

    return result;

    fs.unlinkSync(filePath);
    console.log('local file deletd');
  } catch (error) {
    console.error('Error reading file or uploading to Cloudinary:', error);
    throw error;
  }
}

module.exports = uploadToCloudinary;
