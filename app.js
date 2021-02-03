var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	methodOverride = require("method-override"),
	expressSanitizer = require("express-sanitizer"),
	path = require("path"),
	Blog = require("./models/blogModel"),
	Comment = require("./models/commentModel"),
	Message = require("./models/messageModel"),
	crypto = require("crypto"),
	multer = require("multer"),
	gridFsStorage = require("multer-gridfs-storage"),
	Grid = require("gridfs-stream");

var BlogRoutes = require("./routes/blog"),
	CommentsRoutes = require("./routes/comments"),
	MessageRoutes = require("./routes/message"),
	UserRoutes = require("./routes/user.route"),
	indexRoutes = require("./routes/index");

//connect to mongodb
const DB_NAME = process.env.DATABASEURL || "mongodb://localhost/hauwalawal";
mongoose.Promise = global.Promise;
mongoose.connect(DB_NAME, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});




app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressSanitizer());
app.use(methodOverride("_method"));


app.use("/blogs", BlogRoutes);
app.use("/message", MessageRoutes);
app.use("/blogs/:id/comments", CommentsRoutes);
app.use(indexRoutes);
app.use('/api', UserRoutes);






app.listen(10624, function () {
	console.log("the blog server has started!");
});

// process.env.PORT, process.env.IP,