const express = require("express")
const { v4: uuidv4 } = require("uuid")

const app = express()
app.use(express.json())

const commentsByPostId = {}

app.get("/posts/:id/comments", (req, res) => {
	res.send(commentsByPostId[req.params.id] || [])
})

app.post("/posts/:id/comments", (req, res) => {
	const commentId = uuidv4() // Generate random Id
	const { content } = req.body

	// Set comments to req.params.id in commentsByPostId or set to empty array
	const comments = commentsByPostId[req.params.id] || []

	// Push content to comments
	comments.push({ id: commentId, content })

	// Create or Update req.params.id in commentsByPostId with comments
	commentsByPostId[req.params.id] = comments

	res.status(201).send(comments)
})

app.listen(4001, () => console.log("STARTED SERVER 4001"))
