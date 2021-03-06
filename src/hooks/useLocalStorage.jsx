import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue) => {
	const [state, setState] = useState(() => {
		let value;
		try {
			value =
				JSON.parse(window.localStorage.getItem(key)) ||
				JSON.stringify(defaultValue, null, 2);
		} catch (error) {
			value = defaultValue;
		}
		return value;
	});

	useEffect(() => {
		window.localStorage.setItem(key, state);
	}, [state, key]);

	return [state, setState];
};
