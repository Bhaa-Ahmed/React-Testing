import { useState } from "react";
import { skillsProps } from "./Skills.types";

const Skills = ({ skills }: skillsProps) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<>
			<ul>
				{skills.map(skill => {
					return <li key={skill}>{skill}</li>;
				})}
			</ul>
			{isLoggedIn ? (
				<button>Start Learning</button>
			) : (
				<button onClick={() => setIsLoggedIn(true)}>Login</button>
			)}
		</>
	);
};

export default Skills;
