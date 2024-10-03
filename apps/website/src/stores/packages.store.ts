import 'client-only';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type PackagePaiementMode = 'default' | 'discounted';

type PackagesStore = {
	mode: PackagePaiementMode;
	setMode: (mode: PackagePaiementMode) => void;
};

const initialState: PackagesStore = {
	mode: 'default',
	setMode: () => {},
};

export const usePackagesStore = create<PackagesStore>()(
	persist(
		(set) => ({
			...initialState,
			setMode: (mode: PackagePaiementMode) => set({ mode }),
		}),
		{
			name: 'packages-store',
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);
