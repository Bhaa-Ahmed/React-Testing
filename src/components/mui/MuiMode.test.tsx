import MuiMode from "./MuiMode";
import { render, screen } from "../../test-utils";

describe("MuiMode", () => {
	test("renders test correctly", () => {
		render(<MuiMode />);
		expect(screen.getByRole("heading")).toHaveTextContent("dark mode");
	});
});
