import React from "react";

function article_1() {
	return {
		date: "12 October 2023",
		title: "Coming Soon!",
		description:
			"This will be my first article!",
		keywords: [
			"Jillian",
			"Nylund",
			"Jillian N",
			"Please search for me",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<p>Content Here</p>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
