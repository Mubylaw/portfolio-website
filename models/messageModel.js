var mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
	name: String,
	email: String,
	text: String,
	created: {type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", messageSchema);
