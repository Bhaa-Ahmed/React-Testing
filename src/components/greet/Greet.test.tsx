import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders correctly", () => {
	render(<Greet />);
	const textElement = screen.getByText("Hello");
	expect(textElement).toBeInTheDocument();
});

test("Greet render with a name", () => {
	render(<Greet name="Bahaa" />);
	const textElement = screen.getByText("Hello Bahaa");
	expect(textElement).toBeInTheDocument();
});
