const express = require("express")
const { v4: uuidv4 } = require("uuid")

const app = express() // Initiate express
app.use(express.json()) // Middleware

const posts = {}

app.get("/posts", (req, res) => {
	res.send(posts)
})

app.post("/posts", (req, res) => {
	const id = uuidv4()
	const { title } = req.body

	posts[id] = {
		id,
		title
	}

	res.status(201).send(posts[id])
})

app.listen(4000, () => console.log("STARTED SERVER 4000"))
