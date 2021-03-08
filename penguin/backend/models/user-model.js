const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	profileImageUrl: { type: String }
})

// check if user created new password, if so hash & save new password, else save password as is.
userSchema.pre("save", async function (next) {
	try {
		if (!this.isModified("password")) {
			return next()
		}
		const hashedPassword = await bcrypt.hash(this.password, 10)
		this.password = hashedPassword
		return next()
	} catch (err) {
		return next(err)
	}
})

// comepare password before letting user log-in
userSchema.method.comparePassword = async function (candidatePassword, next) {
	try {
		const isMatch = await bcrypt.compare(candidatePassword, this.password)
		return isMatch
	} catch (err) {
		return next(err)
	}
}

const User = mongoose.model("User", userSchema)

module.exports = User
