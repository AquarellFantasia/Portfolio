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
							<img
								src="./Zendesk.png"
								alt="Zendesk"
								className="work-image"
							/>
							<div className="work-title">Zendesk</div>
							<div className="work-subtitle">
								Student Software Developer
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./danfoss.png"
								alt="danfoss"
								className="work-image"
							/>
							<div className="work-title">Danfoss Drives</div>
							<div className="work-subtitle">
								DevOps Engineer
							</div>
							<div className="work-duration">2018 - 2020</div>
						</div>

						<div className="work">
							<img
								src="./dansk ingenorservice.png"
								alt="dansk ingenorservice"
								className="work-image"
							/>
							<div className="work-title">Dansk IngeniørService</div>
							<div className="work-subtitle">
								Intern/student worker
							</div>
							<div className="work-duration">2016 - 2017</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
