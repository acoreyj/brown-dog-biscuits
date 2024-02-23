export const getModifiersClasses = (
	modifiers?: Record<string, string>,
	selectedModifiers?: Record<string, boolean>
) => {
	let cls = '';
	if (modifiers && selectedModifiers) {
		Object.keys(modifiers).forEach((key) => {
			if (selectedModifiers[key]) {
				cls += ' ' + modifiers[key as keyof typeof modifiers];
			}
		});
	}
	return cls;
};

export const getBreakpoint = (width: number) => {
	if (width < 640) {
		return 'xs';
	} else if (width < 768) {
		return 'sm';
	} else if (width < 1024) {
		return 'md';
	} else if (width < 1280) {
		return 'lg';
	} else if (width < 1536) {
		return 'xl';
	} else {
		return '2xl';
	}
};

export function debounce<F extends (...args: unknown[]) => void>(
	func: F,
	wait: number
): (...args: Parameters<F>) => void {
	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	return function (...args: Parameters<F>) {
		if (timeoutId !== null) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => func(...args), wait);
	};
}
