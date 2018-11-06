const express = require('express')
const router = express.Router()

const controller = require('../controller/index.js')
router.get('/', controller.handleIndexGet);


router.get('/', (req, res) => {
  res.render('./index.ejs', {})
});


module.exports = router