import React from "react";
import Accordion from "./Accordion";

// Items array

const items = [
	{ title: "What is React", content: "React is a JS library" },
	{ title: "Why use React", content: "React is a Fav library" },
	{ title: "How do you use React", content: "Use it by creating components" }
];

export default function App() {
	return (
		<div>
			<br /> <Accordion items={items} />;
		</div>
	);
}
