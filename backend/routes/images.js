const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configure multer storage and file size limits
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'), // Directory to store images
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB limit
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    return mimetype && extname ? cb(null, true) : cb(new Error('Only images are allowed'));
  },
});

router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded or file size too large' });
  res.status(201).json({ url: `/uploads/${req.file.filename}` }); // Send back the file URL
});

module.exports = router;
