/*todo: resolve anchor on other pages*/
export const navigateToAnchor = (anchor: string) => {
	const element = document.getElementById(anchor);
	if (element) element.scrollIntoView({ behavior: 'smooth' });
};
