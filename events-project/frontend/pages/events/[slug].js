import { useRouter } from "next/router"

export default function EventPage() {
	const router = useRouter()

	console.log(router)
	return (
		<>
			<h1>Slugging</h1>
			<h3>{router.query.slug}</h3>
			<button onClick={() => router.push("/")}>Home</button>
		</>
	)
}
