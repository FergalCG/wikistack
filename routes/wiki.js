const express = require('express');
const router = express.Router();
const wikiFunctions = require('../views/index');
const { Page } = require("../models");
const { addPage } = require("../views");


router.get('/', (req, res, next) => {
    //res.send('main page')
    // res.redirect("/");
    res.send(wikiFunctions.main());
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
        res.redirect('/');
    } catch (err) {
        next(err);
    }
})

router.get('/add', (req, res, next) => {
    res.send(wikiFunctions.addPage());
})


module.exports = router;