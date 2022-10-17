const express = require('express');
const router = express.Router();
const {videoService} = require('../service/videoService')

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

router.get("/", async (req, res) => {

  res.json({data: "hello"})
});

router.get('/video', (req, res) =>{videoService(req, res)});

module.exports = router;


// "unique-filename": "^2.0.1",
// "fluent-ffmpeg": "^2.1.2",
// "@ffmpeg-installer/ffmpeg": "^1.1.0"