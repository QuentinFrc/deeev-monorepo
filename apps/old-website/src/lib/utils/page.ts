import React from 'react';

export type DefaultLayoutProps = {
	children: React.ReactNode;
};

export type LayoutProps<T> = {
	children: React.ReactNode;
	params: T;
};

export type PageProps<T> = {
	params: T;
	searchParams?: { [key: string]: string | string[] | undefined };
};
