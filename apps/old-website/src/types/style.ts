export type ExtractSafeVariant<T extends { variant?: any }> = {
	safeVariant: string | T['variant'];
};
