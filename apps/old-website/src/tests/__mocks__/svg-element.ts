import { vi } from 'vitest';

Object.defineProperty(global.SVGElement.prototype, 'getBBox', {
	writable: true,
	value: vi.fn().mockReturnValue({
		x: 0,
		y: 0,
	}),
});
