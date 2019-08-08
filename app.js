const express = require("express");
const app = express();
const morgan = require("morgan");
const wikiFunctions = require("./views/index");
const models = require("./models");
const db = models.db
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");

const port = process.env.PORT || 3000

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

db.authenticate().
then(() => {
    console.log('connected to the database');
})

app.get("/", (req, res, next) => {
    res.redirect("/wiki");
    // res.send(wikiFunctions.main());

});

const dbSync = async() => {
    await db.sync({ force: true });
    app.listen(port, () => {
        console.log(`server listening on port ${port}`);
    });
}

dbSync();