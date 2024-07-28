const express = require("express");
const multer = require("multer");
const Image = require("../models/Image");
const { authMiddleware } = require("../middleware/auth");
const router = express.Router();
const upload = multer({ dest: "upload/" });

router.post("/upload", authMiddleware, upload.single("image"), async (req, res) => {
  const { name, folderId } = req.body;
  const url = req.file.path;

  try {
    const image = new Image({ name, url, userId: req.user.id, folderId });
    await image.save();
    res.status(201).send("Image uploaded");
  } catch (error) {
    res.status(400).send("Error uploading image");
  }
});

router.get("/search", authMiddleware, async (req, res) => {
  const { name } = req.query;
  try {
    const images = await Image.find({ userId: req.user.id, name: new RegExp(name, "i") });
    res.json(images);
  } catch (error) {
    res.status(400).send("Error searching images");
  }
});

module.exports = router;
