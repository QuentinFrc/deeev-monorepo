import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Pages } from './pages';

const PagesArray = Object.entries(Pages);

/**
 * todo: change this test to a parameterized test receiving the page as a parameter
 * Iterate over the pages and check if they have a h1
 * */
describe.each(PagesArray)('', (page, Page) => {
	test(`${page} has h1`, () => {
		render(<Page />);
		expect(screen.getByRole('heading', { level: 1 }));
	});
});
