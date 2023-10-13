import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/resume.css";

const Resume = () => {
	const pdfUrl = "public/Jillian_Nylund_Website_Resume.pdf";

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "resume");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Resume | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="resume" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Resume and Projects
						</div>
						<br></br>

						<div class="resume">
						<div></div>
      					<a href={pdfUrl} download="Jillian_Nylund_Website_Resume.pdf">
        					Download pdf version!
      					</a>
					<section class="education">
						<h2>Education</h2>
						<p>Bachelor of Engineer in Computer Science, University of Illinois Urbana-Champaign</p>
						<ul>
							<li><u>Expected Graduation:</u> December 2025</li>
							<li><u>Relevant Coursework:</u> Introduction to Computer Science I (Kotlin), Introduction to Computer Science II (C++), Linear Algebra with Computational Application, Discrete Structures, Calculus I, II, and III (HS)</li>
							<li><u>Enrolled in Fall 2023:</u> Data Structures, Numerical Methods, Probability and Statistics for Computer Science</li>
						</ul>
					</section>
					<section class="experience">
						<h2>Experience</h2>
						<h3><b>Solution Street LLC</b></h3>
						<p> <i>Software Engineering Intern</i>, June 2023 - July 2023</p>
						<ul>
							<li>Built a Competency Matrix web app for entire company integrated into existing Timesheets, Database to track employee growth and abilities</li>
							<li>Utilized Agile workflow, Postgres database, Ruby on Rails backend, and React frontend</li>
							<li>Led development as SCRUM master, experienced full-stack development</li>
						</ul>
						<h3><b>Women in Computer Science</b></h3>
						<p> <i>Explorations Committee Co-Chair</i>, August 2022 - Present</p>
						<ul>
							<li>Leading 15-person committee to produce technical resources for students both in the form of workshops, written guides, and video guides. Planning events to encourage participation in computer science by all students.</li>
							<li>Planning all-female and nonbinary hackathon accessible to beginners focusing on Artificial Intelligence and Databases</li>
							<li>Planning and leading year-long project development series </li>
						</ul>
						<h3><b>CS 173: Discrete Structures</b></h3>
						<p> <i>Course Assistant</i>, August 2023 - Present</p>
						<ul>
							<li>Hold office hours and attend classes to assist 200+ students in understanding fundamental computer science topics such as proofs, recursion, time complexity, and Boolean logic</li>
						</ul>
						<h3><b>Girls Who Code</b></h3>
						<p> <i>Lead Facilitator and Curriculum Planner</i>, September 2022 - Present</p>
						<ul>
							<li>Create resources to teach elementary, middle, and high schoolers the basics of computer science</li>
							<li>Teach students gaming algorithms to understand computer gaming strategy, develop Python game with students</li>
							<li>Serve as a source of mentorship and guidance to young computer science students</li>
						</ul>
						<h3><b>Techcats Kids Coding Camp</b></h3>
						<p> <i>Head Counselor</i>, Summers 2017 - 2022</p>
						<ul>
							<li>Taught children ages 8-12 to code in Python, Scratch, and LEGO Mindstorms</li>
							<li>Organized and implemented new methods to keep campers engaged and learning</li>
						</ul>
					</section>
					<section class="skills">
						<h2>Skills</h2>
						<h3><b>Languages and Technologies</b></h3>
						<ul>
							<li>JavaScript</li>
							<li>C++</li>
							<li>Python</li>
							<li>Java</li>
							<li>Kotlin</li>
							<li>Ruby</li>
							<li>HTML/CSS</li>
							<li>SQL</li>
							<li>React</li>
							<li>Ruby on Rails</li>
							<li>PostgreSQL</li>
						</ul>
						<h3><b>Development Tools</b></h3>
						<ul>
							<li>Agile Team Development</li>
							<li>SCRUM</li>
							<li>Git/Github</li>
							<li>Jira</li>
							<li>Bitbucket</li>
						</ul>
						</section>
					</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resume;
