type VariantObject = {
	variants: {
		variant: {
			[key: string]: any;
		};
	};
};

export const isVariant = <T extends VariantObject>(
	variants: T,
	variant?: string,
): variant is Extract<keyof T['variants']['variant'], string> =>
	variant! in variants['variants']['variant'];
