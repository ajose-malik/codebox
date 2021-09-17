process.env.UV_THREADPOOL_SIZE = 1
const cluster = require("cluster")
const crypto = require("crypto")

// Is the file being executed in master mode?
if (cluster.isMaster) {
	// If so, execute index.js again, but in slave mode the second time around
	// cluster.fork()
	// cluster.fork()
	cluster.fork()
	cluster.fork()
} else {
	// If index.js is not in master mode, then do nothing and keep it as default non-cluster server
	const express = require("express")
	const app = express()

	app.get("/", (req, res) => {
		crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
			res.send("hello")
		})
	})

	app.get("/fast", (req, res) => {
		res.send("pretty fast")
	})

	app.listen(3000, () => console.log("STARTED 3000"))
}
