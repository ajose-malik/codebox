const db = require("../models/db")
const jwt = require("jsonwebtoken")
const { SECRET } = process.env
exports.signin = () => {}

exports.signup = async (req, res, next) => {
	try {
		const user = await db.User.create(req.body)
		const { id, username, profileImageUrl } = user
		const token = jwt.sign(
			{
				id,
				username,
				profileImageUrl
			},
			SECRET
		)

		return res.status(200).json({
			id,
			username,
			profileImageUrl,
			token
		})
	} catch (err) {
		// if username is taken
		if (err.code === 11000) {
			err.message = "Sorry, username and/or email already taken"
		}

		return next({
			status: 400,
			message: err.message
		})
	}
}
