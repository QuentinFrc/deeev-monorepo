/** take a function as parameter, and it returns a function that will only call the original function once */

export const callOnce = (fn: () => unknown) => {
	let called = false;
	return () => {
		if (called) return;
		called = true;
		fn();
	};
};
