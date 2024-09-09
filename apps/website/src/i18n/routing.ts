import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { defaultLocale, locales } from '@/config/locales';

export const routing = defineRouting({
	locales,
	defaultLocale,
	localePrefix: 'as-needed',
});

export const { Link, redirect, usePathname, useRouter } =
	createSharedPathnamesNavigation(routing);
