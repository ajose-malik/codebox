const express = require("express")
const { v4: uuidv4 } = require("uuid")

const app = express()
app.use(express.json())

const commentsByPostId = {}

app.get("/posts/:id/comments", (req, res) => {
	res.send("hiyo")
})

app.post("/posts/:id/comments", (req, res) => {})

app.listen(4001, () => console.log("STARTED SERVER 4001"))
