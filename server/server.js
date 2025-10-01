const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 5000;

app.use(cors());

// Create folders if they don't exist
const submissionsDir = path.join(__dirname, "submissions");
const uploadsDir = path.join(__dirname, "uploads");

if (!fs.existsSync(submissionsDir)) fs.mkdirSync(submissionsDir);
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

// Handle form submission with images
// Use upload.fields to accept multiple image fields
app.post(
  "/submit",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "cover", maxCount: 1 },
    { name: "gallery", maxCount: 5 },
  ]),
  (req, res) => {
    const data = req.body;
    const files = req.files;

    // Replace file objects in data with filenames
    if (files.logo) data.logo = files.logo[0].filename;
    if (files.cover) data.cover = files.cover[0].filename;
    if (files.gallery) data.gallery = files.gallery.map((f) => f.filename);

    // Save submission as JSON
    const timestamp = Date.now();
    const fileName = `submission_${timestamp}.json`;
    const filePath = path.join(submissionsDir, fileName);

    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error("Error saving file:", err);
        return res
          .status(500)
          .json({ success: false, message: "Failed to save file" });
      }

      console.log("Saved submission:", filePath);
      res.json({ success: true, file: fileName });
    });
  }
);

// Basic test route
app.get("/", (req, res) => {
  res.send("Server is running. Use POST /submit to submit the form.");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
