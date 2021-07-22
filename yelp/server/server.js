require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();

// Middleware
app.use(express.json());

//  Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
	try {
		const results = await db.query("select * from restaurants");

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: {
				restaurants: results.rows
			}
		});
	} catch (e) {
		console.log("Not Successful");
	}
});

// Get one restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
	try {
		const results = await db.query("select * from restaurants where id = $1", [
			req.params.id
		]);

		res.status(200).json({
			status: "success",
			data: {
				restaurant: results.rows
			}
		});
	} catch (e) {
		console.log("Not Successful");
		console.log(e);
	}
});

// Create restaurant
app.post("/api/v1/restaurants/:id", async (req, res) => {
	try {
		const results = await db.query(
			"insert into restaurants (name, locations, price_range) values($1,$2,$3) returning *",
			[req.body.name, req.body.location, req.body.price_range]
		);

		res.status(201).json({
			status: "success",
			data: {
				restaurant: results.rows
			}
		});
	} catch (e) {
		console.log(e);
	}
});

// Update restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
	try {
		const results = await db.query(
			"update restaurants set name = $1, location = $2, price_range = $3 where id = $4 returning *",
			[req.body.name, req.body.location, req.body.price_range, req.params.id]
		);
		res.status(200).json({
			status: "success",
			data: {
				restaurant: results.rows[0]
			}
		});
	} catch (e) {
		console.log(e);
	}
});

// Delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
	try {
		const results = await db.query("delete from restaurants where id = $1", [
			req.params.id
		]);
		res.status(204).json({
			status: "deleted"
		});
	} catch (e) {
		console.log(e);
	}
});

// Port to listen from
const { PORT } = process.env || 3001;

app.listen(PORT, () => {
	console.log(`STARTED ${PORT}`);
});
