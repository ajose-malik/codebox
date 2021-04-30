const { events } = require("./data.json")

export default (req, res) => {
	const eventSlug = events.filter(evt => evt.slug === req.query.slug) // Filter out "slug" in events that matches request slug

	// Check RESTful method
	if (req.method === "GET") {
		res.status(200).json(eventSlug) // If GET request, send status 200 and eventSlug
	} else {
		res.setHeader("Allow", ["GET"]) // Set array of methods that are allowed
		res.status(405).json({ message: `Method ${req.method} is not allowed` }) // Display message if method is not allowed
	}
}
