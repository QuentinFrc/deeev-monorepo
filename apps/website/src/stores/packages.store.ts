import 'client-only';

import { create } from 'zustand';

export type PackagePaiementMode = 'subscription' | 'one-time';

type PackagesStore = {
	mode: PackagePaiementMode;
	setMode: (mode: PackagePaiementMode) => void;
};

const initialState: PackagesStore = {
	mode: 'one-time',
	setMode: () => {},
};

export const usePackagesStore = create<PackagesStore>((set) => ({
	...initialState,
	setMode: (mode: PackagePaiementMode) => set({ mode }),
}));
