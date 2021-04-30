// Set API endpoint based on development or production mode
// Adding NEXT_PUBLIC as a prefix makes the API visible on client side
export const API_URL =
	process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
