import { IconName } from '@repo/ui/icons';

export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	icon?: IconName;
	label?: string;
};

export type SidebarNavItem = {
	title: string;
	items?: NavItem[];
};

export type SidebarNav = SidebarNavItem[];
