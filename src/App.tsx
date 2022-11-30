import "./App.css";
import Application from "./components/application/Application";
import Counter from "./components/counter/Counter";
import CounterTwo from "./components/counterTwo/CounterTwo";
import MuiMode from "./components/mui/MuiMode";
import Skills from "./components/skills/Skills";
import AppProviders from "./providers/AppProviders";

function App() {
	return (
		<AppProviders>
			<div className="App">
				{/* <Application />
			<Skills skills={["HTML", "CSS", "JavaScript"]} /> */}
				{/* <Counter /> */}
				<CounterTwo count={1} />
				<MuiMode />
			</div>
		</AppProviders>
	);
}

export default App;
