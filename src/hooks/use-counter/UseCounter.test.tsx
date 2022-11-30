import UseCounter from "./UseCounter";
import { renderHook } from "@testing-library/react";

describe("useCounter", () => {
	test("should render the initial count", () => {
		const { result } = renderHook(UseCounter);
		expect(result.current.count).toBe(0);
	});

	test("should accept and render the same initial count", () => {
		const { result } = renderHook(UseCounter, {
			initialProps: {
				initialCount: 10,
			},
		});
		expect(result.current.count).toBe(10);
	});
});
