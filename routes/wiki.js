const express = require('express');
const router = express.Router();
const wikiFunctions = require('../views/index');
const { Page } = require("../models");
const { addPage } = require("../views");


router.get('/', async (req, res, next) => {
    //res.send('main page')
    // res.redirect("/");
    const allPosts = await Page.findAll();
    console.log(allPosts);
    res.send(wikiFunctions.main(allPosts));
})

router.post('/', async(req, res, next) => {

    const page = new Page({
        title: req.body.title,
        content: req.body.content,
        slug: req.body.title,
        status: req.body.status
    });
    console.log(page);
    try {
        await page.save();
        res.redirect(`/wiki/${page.slug}`);
    } catch (err) {
        next(err);
    }
})

router.get('/add', (req, res, next) => {
    res.send(wikiFunctions.addPage());
})

router.get('/:slug', async (req, res, next) => {
  try {
    const slugPost = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    })
    console.log(slugPost)
    res.send(wikiFunctions.wikiPage(slugPost));
  } catch (error) {
    next(error);
  }

  //res.send(`hit dynamic route at ${req.params.slug}`);
});


module.exports = router;
