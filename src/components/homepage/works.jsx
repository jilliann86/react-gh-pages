import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Caterpillar</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">Summer 2024</div>
						</div>

						<div className="work">
							<div className="work-title">Solution Street</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">Summer 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
