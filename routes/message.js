var express = require("express");
var router = express.Router();
var Message = require("../models/messageModel");
var	methodOverride = require("method-override");

router.use(methodOverride("_method"));

router.get("/", function (req,res) {
	Message.find({}, function (err, messages) {
		if (err) {
			console.log(err)
		} else {
			res.render("message", { messages : messages});
		}
	});
});

router.post("/", function (req,res) {
	var name = req.body.name;
	var email = req.body.email;
	var text = req.body.text;
	var newMessage = {name:name, text:text, email:email };
	Message.create( newMessage , function (err,messages) {
		if (err) {
			alert(err);
		} else {
			res.redirect("/")
		}
	});
});

router.delete("/:id", function (req,res) {
	Message.findByIdAndRemove(req.params.id, function (err) {
		if (err) {
			res.redirect("/message")
		} else {
			res.redirect("/message")
		}
	});
});

module.exports = router;