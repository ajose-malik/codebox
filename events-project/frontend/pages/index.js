import Layout from "@components/Layout"
import { API_URL } from "@config/index"

export default function HomePage({ events }) {
	return (
		<>
			<Layout>
				<h1>Upcoming Events</h1>
			</Layout>
		</>
	)
}

// // Fetch data from server side {./pages/api/events/index} as props
// // getServerSideProps is for dynamic websites and makes request on each browser reload
// export async function getServerSideProps() {
// 	const res = await fetch(`${API_URL}/api/events`)
// 	const events = await res.json()

// 	// Must return object
// 	return {
// 		props: { events }
// 	}
// }

// Fetch data from server side {./pages/api/events/index} as props
// getStaticProps is for static websites and makes request once during build time
export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/events`)
	const events = await res.json()

	// Must return object
	return {
		props: { events },
		revalidate: 1 // This option bypasses the getStaticProps behavior by fetching data when changes are made after build time. Currently set to fetch data 1 second after changes are made to API
	}
}
