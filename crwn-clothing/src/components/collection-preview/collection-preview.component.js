import React from "react";
// import { withRouter } from "react-router-dom";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, name }) => (
						<div key={id}>{name}</div>
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
