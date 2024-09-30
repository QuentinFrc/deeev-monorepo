import React from 'react';

export const extractTextFromChildren = (children: React.ReactNode): string => {
	if (typeof children === 'string') {
		return children;
	}

	if (Array.isArray(children)) {
		return children.map(extractTextFromChildren).join('');
	}

	if (React.isValidElement(children)) {
		return extractTextFromChildren(children.props.children);
	}

	return '';
};
