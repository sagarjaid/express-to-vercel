const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

router.get("/", async (req, res) => {

  res.json({data: "hello"})
});

module.exports = router;