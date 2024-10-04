'use client';

import React from 'react';

type ProcessAssetProps = {
	children: React.ReactNode;
};

const ProcessAsset = ({ children }: ProcessAssetProps) => {
	return <div>{children}</div>;
};

export const MeetingAsset = () => {
	return <ProcessAsset>Meeting Asset</ProcessAsset>;
};

export const ProgressionAsset = () => {
	return <ProcessAsset>Meeting Asset</ProcessAsset>;
};

export const ManagementAsset = () => {
	return <ProcessAsset>Management Asset</ProcessAsset>;
};

export const MaintenanceAsset = () => {
	return <ProcessAsset>Management Asset</ProcessAsset>;
};
