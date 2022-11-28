import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
	test("renders correctly", () => {
		render(<Application />);

		const pageHeading = screen.getByRole("heading", {
			level: 1,
		});
		expect(pageHeading).toBeInTheDocument();

		const sectionHeading = screen.getByRole("heading", {
			level: 2,
		});
		expect(sectionHeading).toBeInTheDocument();

		const paragraphElement = screen.getByText("All fields are mandatory");
		expect(paragraphElement).toBeInTheDocument();

		const closeElement = screen.getByTitle("close");
		expect(closeElement).toBeInTheDocument();

		const imageElement = screen.getByAltText("a person with a laptop");
		expect(imageElement).toBeInTheDocument();

		const customElement = screen.getByTestId("custom-element");
		expect(customElement).toBeInTheDocument();

		const nameElement = screen.getByRole("textbox", {
			name: "Name",
		});
		expect(nameElement).toBeInTheDocument();

		const nameElement2 = screen.getByLabelText("Name");
		expect(nameElement2).toBeInTheDocument();

		const nameElements3 = screen.getByPlaceholderText("Fullname");
		expect(nameElements3).toBeInTheDocument();

		const nameElement4 = screen.getByDisplayValue("Bahaa");
		expect(nameElement4).toBeInTheDocument();

		const bioElement = screen.getByRole("textbox", {
			name: "Bio",
		});
		expect(bioElement).toBeInTheDocument();

		const jobLocationElements = screen.getByRole("combobox");
		expect(jobLocationElements).toBeInTheDocument();

		const termsElements = screen.getByRole("checkbox");
		expect(termsElements).toBeInTheDocument();

		const termsElements2 = screen.getByLabelText(
			"I agree to the terms and conditions"
		);
		expect(termsElements2).toBeInTheDocument();

		const submitButtonElement = screen.getByRole("button");
		expect(submitButtonElement).toBeInTheDocument();
	});
});
