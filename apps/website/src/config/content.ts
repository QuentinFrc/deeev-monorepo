export const PACKAGE_PRICING = {
	spot_left: 3,
	landing_page: {
		default: {
			price: 1490,
			maintenance: 119,
		},
		discounted: {
			price: 990,
			maintenance: 119,
		},
	},
	full_website: {
		default: {
			price: 2490,
			maintenance: 169,
		},
		discounted: {
			price: 2190,
			maintenance: 169,
		},
	},
} as const;

export const MAX_FAQ_ITEM_COUNT = 8;
