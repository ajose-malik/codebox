import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import StreamCreate from "./streams/StreamCreate"
import StreamEdit from "./streams/StreamEdit"
import StreamDelete from "./streams/StreamDelete"
import StreamList from "./streams/StreamList"
import StreamShow from "./streams/StreamShow"

export default function App() {
	return (
		<>
			<BrowserRouter>
				<div>
					<Route path="/" exact component={StreamList}></Route>
				</div>
				<div>
					<Route path="/streams/new" exact component={StreamCreate}></Route>
				</div>
				<div>
					<Route path="/streams/edit" exact component={StreamEdit}></Route>
				</div>
				<div>
					<Route path="/streams/delete" exact component={StreamDelete}></Route>
				</div>
				<div>
					<Route path="/streams/show" exact component={StreamShow}></Route>
				</div>
			</BrowserRouter>
		</>
	)
}
