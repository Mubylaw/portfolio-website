var express = require("express");
var router = express.Router();
var Users = require("../models/picture");
var Blog = require("../models/blogModel");
var	methodOverride = require("method-override");

router.use(methodOverride("_method"));

router.get("/", function (req,res) {
	Blog.find({}, function (err, blogs) {
		if (err) {
			console.log(err)
		} else {
			res.render("landing", { blogs : blogs});
		}
	});
});


router.get('/upload', (req, res) => {
  Users.find({}, function (err, users) {
		if (err) {
			console.log(err)
		} else {
			res.render("index", { users : users});
		}
	});
});

router.delete("/:id", function (req,res) {
	Users.findByIdAndRemove(req.params.id, function (err) {
		if (err) {
			res.redirect("/upload")
		} else {
			res.redirect("/upload")
		}
	});
});

router.get("*",function (req,res) {
	res.render("error");
});

module.exports = router;