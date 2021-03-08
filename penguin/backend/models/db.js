const mongoose = require("mongoose")
// const User = require("./user-model")
// const { MONGODB_URI, SECRET } = process.env

mongoose
	.connect("mongodb://localhost/penguin", {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => console.log("STARTED MONGODB"))
	.catch(err => console.log("DISASTER\n", err))

module.exports.User = require("./user-model")
