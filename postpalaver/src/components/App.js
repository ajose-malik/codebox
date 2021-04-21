import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import theme from "../theme"
import { Header } from "./Header"

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			'Hello!'
		</ThemeProvider>
	)
}
