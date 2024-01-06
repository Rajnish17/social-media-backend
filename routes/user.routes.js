const express = require("express");
const router = express.Router();
const multer = require('multer');
const { registerUser, loginUser } = require("../controllers/user.controller");
const {uploadController,deleteController} =require("../controllers/fileUpload")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Adjust the destination folder as needed
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage: storage });


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/upload', upload.single('file'), uploadController);
router.post('/delete/:id', deleteController);

module.exports = router;
