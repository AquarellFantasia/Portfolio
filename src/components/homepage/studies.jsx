import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/studies.css";

const Studies = () => {
	return (
		<div className="studies">
			<Card
				icon={faGraduationCap}
				title="Studies"
				body={
					<div className="studies-body">
						<div className="university">
							<img
								src="./DTU.png"
								alt="Technical University of Denmark icon"
								className="studies-image"
							/>
							<div className="studies-title">Technical University of Denmark</div>
							<div className="studies-subtitle">
								Computer Science and Engineering
							</div>
							<div className="studies-duration">2020 - 2023</div>
						</div>

						<div className="university">
							<img
								src="./VIA.png"
								alt="Via University College icon"
								className="studies-image"
							/>
							<div className="studies-title">VIA University College</div>
							<div className="studies-subtitle">
								ICT Engineering
							</div>
							<div className="studies-duration">2014 - 2018</div>
						</div>


					</div>
				}
			/>
		</div>
	);
};

export default Studies;
