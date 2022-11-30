import { render, screen } from "../../test-utils";
import Greet from "./Greet";

describe("Greet", () => {
	test("renders correctly", () => {
		render(<Greet />);
		const textElement = screen.getByText("Hello");
		expect(textElement).toBeInTheDocument();
	});

	describe("Nesting", () => {
		test("render with a name", () => {
			render(<Greet name="Bahaa" />);
			const textElement = screen.getByText("Hello Bahaa");
			expect(textElement).toBeInTheDocument();
		});
	});
});
