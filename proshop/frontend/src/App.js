import React from "react"
import { Container } from "react-bootstrap"
import Header from "./comps/header"
import Footer from "./comps/footer"

const App = () => {
	return (
		<>
			<Header />
			<main className="py-3">
				<Container>
					<h1>hello</h1>
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App
