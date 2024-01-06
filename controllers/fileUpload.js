const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const uploadToCloudinary = require('../utils/uploadFile');

// Example Express controller
 const uploadController= async(req, res)=> {
  try {
    // Get the file from the request
    const { file } = req;

    if (!file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    // Call the uploadToCloudinary function
    const cloudinaryResult = await uploadToCloudinary(file.path);

    // Delete the local file after uploading to Cloudinary
    fs.unlinkSync(file.path);

    res.json({ cloudinaryResult });
  } catch (error) {
    console.error('Error in uploadController:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

 const deleteController = async(req, res) =>{
  try {
    // Get the public_id of the image to delete from the request parameters
    const { public_id } = req.params;
       console.log(public_id);
    if (!public_id) {
      return res.status(400).json({ error: 'No public_id provided' });
    }

    // Call the Cloudinary destroy method to delete the image
    const cloudinaryResult = await cloudinary.uploader.destroy(public_id);

    // Check if the image was successfully deleted
    if (cloudinaryResult.result === 'ok') {
      res.json({ message: 'Image deleted from Cloudinary' });
    } else {
      res.status(500).json({ error: 'Failed to delete image from Cloudinary' });
    }
  } catch (error) {
    console.error('Error in deleteController:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports ={ 
  uploadController,
  deleteController
};
