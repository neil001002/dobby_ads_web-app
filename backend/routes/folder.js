const express = require("express");
const Folder = require("../models/Folder");
const { authMiddleware } = require("../middleware/auth");
const router = express.Router();

router.post("/create", authMiddleware, async (req, res) => {
  const { name, parentId } = req.body;
  try {
    const folder = new Folder({ name, userId: req.user.id, parentId });
    await folder.save();
    res.status(201).send("Folder created");
  } catch (error) {
    res.status(400).send("Error creating folder");
  }
});

module.exports = router;
