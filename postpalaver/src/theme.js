import { createMuiTheme } from "@material-ui/core/styles"

const gray = "#212121"
const offWhite = "#e0e0e0"

// Set-up for material ui theme
export default createMuiTheme({
	palette: {
		common: {
			gray,
			offWhite
		},

		primary: {
			main: gray
		},

		secondary: {
			main: offWhite
		}
	},

	typography: {
		tab: {
			fontFamily: "Raleway",
			textTransform: "none",
			fontWeight: 700,
			fontSize: "1rem"
		}
	}
})
