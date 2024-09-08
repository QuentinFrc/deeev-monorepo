import React from 'react';
import { LabsLayout, LabsLayoutProps } from '@ui/modules/labs';

export { metadata } from '@ui/modules/labs';

export default function Layout(props: LabsLayoutProps) {
	return <LabsLayout {...props} />;
}
