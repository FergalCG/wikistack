const express = require('express');
const router = express.Router();
const wikiFunctions = require('../views/index');


router.get('/', (req, res, next) => {
  //res.send('main page')
  // res.redirect("/");
  res.send(wikiFunctions.main());
})

router.post('/', (res, req, next) => {

})

router.get('/add', (req, res, next) => {
  res.send(wikiFunctions.addPage());
})


module.exports = router;
