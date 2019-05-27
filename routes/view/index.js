var router = require("express").Router();
var db = require("../../models");

router.get("/", function (req,res) {
    db.Headline.find({saved: false})
    .sort({date: -1})
    .then(function (dbArticles) {
        res.render("home", {articles: dbArticles});
    });
});