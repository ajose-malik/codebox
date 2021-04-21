import { makeStyles } from "@material-ui/styles"

export const HeaderStyles = makeStyles(theme => ({
	// Push elements hiding behind toolbar down
	toolbarMargin: {
		...theme.mixins.toolbar
	},

	logo: {
		height: "50px",
		marginLeft: "20px"
	}
}))
