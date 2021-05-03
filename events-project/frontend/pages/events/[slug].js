import Image from "next/image"
import Link from "next/link"
import { FaPencilAlt, FaTimes } from "react-icons/fa"
import Layout from "@components/Layout"
import { API_URL } from "@config/index"
import Styles from "@styles/Event.module.css"

export default function EventPage({ event }) {
	// Fake delete function
	const deleteEvent = e => {
		console.log("delete")
	}
	return (
		<>
			<Layout>
				<div className={Styles.event}>
					<div className={Styles.controls}>
						<Link href={`/events/edit/${event.id}`}>
							<a>
								{" "}
								<FaPencilAlt /> Edit Event
							</a>
						</Link>
						<a href="#" className={Styles.delete} onClick={deleteEvent}>
							<FaTimes /> Delete Event
						</a>
					</div>
					<span>
						{new Date(event.date).toLocaleDateString("en-US")} at {event.time}
					</span>
					<h1>{event.name}</h1>
					{event.image && (
						<div className={Styles.image}>
							<img
								src={event.image.formats.medium.url}
								width={960}
								height={600}
							/>
						</div>
					)}
					<h3>Performers:</h3>
					<p>{event.performers}</p>
					<h3>Description:</h3>
					<p>{event.description}</p>
					<h3>Venue: {event.venue}</h3>
					<p>{event.address}</p>

					<Link href="/events">
						<a className={Styles.back}>{"<"} Back</a>
					</Link>
				</div>
			</Layout>
		</>
	)
}

// Fetch data from server side {./pages/api/events/[slug]} as props
// getServerSideProps is for dynamic websites and makes request on each browser reload
export async function getServerSideProps({ query: { slug } }) {
	const res = await fetch(`${API_URL}/events?slug=${slug}`)
	const events = await res.json()
	return {
		props: { event: events[0] }
	}
}

// // Fetch data from server side {./pages/api/events/[slug]} as props
// // Get paths from getStaticPaths and use paths in getStaticProps—this has to be done because slugs can not be extracted directly from getStaticProps—unlike getServerSideProps
// export async function getStaticPaths() {
// 	const res = await fetch(`${API_URL}/api/events`)

// 	const events = await res.json()

// 	const paths = events.map(event => ({ params: { slug: event.slug } }))

// 	// Must return object
// 	return {
// 		paths,
// 		fallback: true // Continue to request until data is available
// 		// fallback: false, // Show 404 if path is not found
// 	}
// }
// // getStaticProps is for static websites and makes request once during build time
// export async function getStaticProps({ params: { slug } }) {
// 	const res = await fetch(`${API_URL}/events/${slug}`)
// 	const events = await res.json()

// 	// Must return object
// 	return {
// 		props: { event: events[0] },
// 		revalidate: 1 // This option bypasses the getStaticProps behavior by fetching data when changes are made after build time. Currently set to fetch data 1 second after changes are made to API
// 	}
// }
