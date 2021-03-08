// Required /////////
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const errorHandler = require("./handlers/error-handler")
const authRoutes = require("./routes/auth-route")

// Config ///////////
const app = express()
app.use(cors())

// Middleware + Engine ///////////
app.use(express.static("public"))

// app.use(express.urlencoded({ extended: true })) // use for development with renderers like ejs handlebars
app.use(express.json()) // used for API ///
app.use("/api/auth", authRoutes)

// respond to router error /////////
app.use((req, res, next) => {
	const err = new Error("Not Found")
	err.status = 404
	next(err)
})

// handle router error from above ///////
app.use(errorHandler)

// port config //////
const { PORT } = process.env || 4000

app.listen(PORT, () => console.log("STARTED PORT:", PORT))
