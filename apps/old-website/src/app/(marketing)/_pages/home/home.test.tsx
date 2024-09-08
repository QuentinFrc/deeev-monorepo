import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { HomePage } from './home';

test('Page', () => {
	render(<HomePage />);
	expect(screen.getByRole('main')).toBeDefined();
});
