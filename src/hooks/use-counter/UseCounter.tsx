import { UseCounterProps } from "./useCounter.types";
import { useState } from "react";

const UseCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
	const [count, setCount] = useState(initialCount);
	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	return { count, increment, decrement };
};

export default UseCounter;
