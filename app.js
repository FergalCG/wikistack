const express = require("express");
const app = express();
const morgan = require("morgan");
const wikiFunctions = require("./views/index");
const models = require("./models");
const db = models.db

const port = process.env.PORT || 1337

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

db.authenticate().
then(() => {
    console.log('connected to the database');
})

app.get("/", (req, res, next) => {
    console.log("hello world");
    res.send(wikiFunctions.main());
});

const dbSync = async() => {
    await db.sync({ force: true });
    app.listen(port, () => {
        console.log(`server listening on port ${port}`);
    });
}

dbSync();