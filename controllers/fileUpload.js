const uploadToCloudinary = require('../utils/uploadFile');

// Example Express controller
async function uploadController(req, res) {
  try {
    // Assuming the file is sent as 'file' in a multipart/form-data request
    const { file } = req;

    if (!file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    // Call the uploadToCloudinary function
    const cloudinaryResult = await uploadToCloudinary(file.path);

    // Optionally, you can do something with the Cloudinary result
    // For example, send a response back to the client
    res.json({ cloudinaryResult });
  } catch (error) {
    console.error('Error in uploadController:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = uploadController;
