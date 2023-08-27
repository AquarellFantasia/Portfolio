import React from "react";

function article_1() {
	return {
		date: "30 May 2023",
		title: "Website using React and AWS S3.",
		description:
			"Here you will read about my journey of creating a portfolio website using React and hosting it on AWS S3.",
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
					<div className="paragraph">
						<p>
							For a while now, I desired to have a personal
							website. I thought of using Wordpress, but, as a
							developer, I wanted to have learn new technology and
							get more control over the website. I tried bootstrap
							and ASP.NET, but I was not satisfied with the
							functionality. Then I came across React and I was
							amazed by its simplicity and functionality.
						</p>
						<p>
							First step was to learn React. I started with
							tutorials and even bought a course in React +
							Typescript.
						</p>
						<p>
							Then I searched for some examples of portfolio
							websites and came across a wonderfull website{" "}
							<a href="https://reactjsexample.com/">
								https://reactjsexample.com/
							</a>{" "}
							where developers share their projects. I got the inspiration for my website from the
							developer Tharindu N. Madusanka and created my own.
						</p>
						<p>
							Then I started to think about hosting. It tured out
							simple to host it on Netlify and now, the next step is to add Google Analythics.
						</p>
						<p> Netlify is a great hosting platform. It is free and easy to use. </p>
					</div>

					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
