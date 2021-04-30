const { events } = require("./data.json")

export default (req, res) => {
	// Check RESTful method
	if (req.method === "GET") {
		res.status(200).json(events)
	} else {
		res.setHeader("Allow", ["GET"]) // Set array of methods that are allowed
		res.status(405).json({ message: `Method ${req.method} is not allowed` }) // Display message if method is not allowed
	}
}
