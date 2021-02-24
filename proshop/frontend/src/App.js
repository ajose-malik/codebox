import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import MainPage from "./pages/main-page"
import Navbar from "./comps/navbar"
import Footer from "./comps/footer"
import theme from "./mui-theme"

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Navbar />
				<MainPage />
				<Footer />
			</ThemeProvider>
		</div>
	)
}

export default App
