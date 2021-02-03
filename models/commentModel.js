var mongoose = require("mongoose");


var CommentSchema = new mongoose.Schema({
	comment: String,
	email: String,
	name: String,
	created: {type: Date, default: Date.now },
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

module.exports = mongoose.model("Comment", CommentSchema);