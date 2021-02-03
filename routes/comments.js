var express = require("express");
var router = express.Router({mergeParams: true});
var Comment = require("../models/commentModel");
var Blog = require("../models/blogModel");
var	methodOverride = require("method-override");

router.use(methodOverride("_method"));

router.post("/" ,function (req, res) {
	Blog.findById(req.params.id, function (err, blog) {
		if (err) {
			console.log(err)
		} else {
			var name = req.body.name;
			var email = req.body.email;
			var comment = req.body.comment;
			var newComment = {name:name, email:email, comment:comment};
			// console.log(newComment);
			Comment.create( newComment , function (err, comment) {
				if (err) {
					console.log(err)
				} else {
					comment.save();
					blog.comments.push(comment);
					blog.save();
					res.redirect("/blogs/" + blog._id )
				}
			});
		};
	});
});


router.delete("/:comment_id", function (req , res) {
	Comment.findByIdAndRemove(req.params.comment_id, function (err) {
		if (err) {
			res.redirect("/blogs/" + req.params.id  );
		} else {
			res.redirect("/blogs/" + req.params.id );
		}
	})
});

router.post("/:comment_reply" ,function (req, res) {
	Comment.findById(req.params.comment_reply, function (err, commentBig) {
		if (err) {
			console.log(err)
		} else {
			var name = req.body.name;
			var email = req.body.email;
			var comment = req.body.comment;
			var newComment = {name:name, email:email, comment:comment};
			Comment.create( newComment , function (err, comment) {
				if (err) {
					console.log(err)
				} else {
					comment.save();
					// console.log(comment);
					commentBig.comments.push(comment);
					// console.log(commentBig.comments);
					commentBig.save();
					res.redirect("/blogs/" + req.params.id )
				}
			});
		};
	});
});

module.exports =router;