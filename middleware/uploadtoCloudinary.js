const uploadToCloudinary = require("../utils/uploadFile");

// Middleware to handle file upload to Cloudinary
const uploadMiddleware = async (req, res, next) => {
    try {
        // Ensure a file is present in the request
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Upload the file to Cloudinary using your utility function
      const result =  await uploadToCloudinary(req.file.path);
      console.log(result);
      res.status(200).json(result);
    //   next();

    } catch (error) {
        console.error('Error handling file upload:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = uploadMiddleware;
