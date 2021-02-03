var express = require("express");
var router = express.Router();
var Blog = require("../models/blogModel");
var	methodOverride = require("method-override");

router.use(methodOverride("_method"));





router.get("/", function (req,res) {
	Blog.find({}, function (err, blogs) {
		if (err) {
			console.log(err)
		} else {
			res.render("blog", { blogs : blogs});
		}
	});
});

router.get("/new", function (req, res) {
	res.render("new")
});

router.post("/", function (req,res) {
	var title = req.body.title;
	var subtitle = req.body.subtitle;
	var category = req.body.category;
	var text = req.body.text;
	var image = req.body.image;
	var newBlog = {title:title, text:text, image:image, category:category, subtitle:subtitle};
	// console.log(newBlog);
	Blog.create( newBlog , function (err,blogs) {
		if (err) {
			alert(err);
			res.render("new")
		} else {
			res.redirect("/blogs")
		}
	});
});

router.get("/:id", function (req,res) {
	Blog.findById(req.params.id).populate({
    path: 'comments',
    // Get comments of comments - populate the 'comments' array for every comment
    populate: { path: 'comments' }
  }).exec(function (err,foundBlog) {
		if (err) {
			console.log(err)
		} else{
			Blog.find({}, function (err, blogs) {
				if (err) {
					console.log(err)
				} else {
					res.render("show", { blogs : blogs, blog: foundBlog });
				}
			});
		}
	})
});

router.get("/:id/edit", function (req,res) {
	Blog.findById(req.params.id , function (err, foundBlog) {
		if (err) {
			res.redirect("/blogs")
		} else {
			res.render("edit", { blog: foundBlog})
		}
	});
});

router.put("/:id", function (req,res) {
	var title = req.body.title;
	var subtitle = req.body.subtitle;
	var category = req.body.category;
	var text = req.body.text;
	var image = req.body.image;
	var newBlog = {title:title, text:text, image:image, category:category, subtitle:subtitle};
	Blog.findByIdAndUpdate(req.params.id, newBlog, function (err,updatedBlog) {
		if (err) {
			res.redirect("/blogs")
		} else {
			res.redirect("/blogs/" + req.params.id);
		}
	});
});

router.delete("/:id", function (req,res) {
	Blog.findByIdAndRemove(req.params.id, function (err) {
		if (err) {
			res.redirect("/blogs")
		} else {
			res.redirect("/blogs")
		}
	});
});

module.exports = router;