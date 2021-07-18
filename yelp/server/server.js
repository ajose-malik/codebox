require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();

// Middleware
app.use(express.json());

//  Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
	const results = await db.query("select * from restaurants");

	console.log(results);
	res.status(200).json({
		status: "success",
		data: {
			restaurant: ["McDonalds", "Wendys"]
		}
	});
});

// Get one restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
	console.log(req.params);
	res.status(200).json({
		status: "success",
		data: {
			restaurant: "McDonalds"
		}
	});
});

// Create restaurant
app.post("/api/v1/restaurants/:id", (req, res) => {
	console.log(req.body);

	res.status(201).json({
		status: "success",
		data: {
			restaurant: "Jerk Chicken"
		}
	});
});

// Update restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
	console.log(req.params.id);
	console.log(req.body);

	res.status(200).json({
		status: "success",
		data: {
			restaurant: "Jerk Chicken"
		}
	});
});

app.delete("/api/v1/restaurants/:id", (req, res) => {
	req.status(204).json({
		status: "deleted"
	});
});

// Port to listen from
const { PORT } = process.env || 3001;

app.listen(PORT, () => {
	console.log(`STARTED ${PORT}`);
});
