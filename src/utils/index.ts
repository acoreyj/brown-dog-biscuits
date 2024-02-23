export const squareIntersectsCircle = (
	circleX: number,
	circleY: number,
	radius: number,
	squareX: number,
	squareY: number,
	squareWidth: number
): boolean => {
	// Calculate the distance between the center of the circle and each corner of the square
	const dx = Math.max(Math.abs(circleX - squareX) - squareWidth / 2, 0);
	const dy = Math.max(Math.abs(circleY - squareY) - squareWidth / 2, 0);
	const distance = Math.sqrt(dx * dx + dy * dy);

	// If the distance is less than or equal to the radius of the circle, the square intersects the circle
	return distance <= radius;
};
export function cssStringify(obj: Partial<CSSStyleDeclaration>) {
	return Object.keys(obj)
		.map((k) => `${k}: ${obj[k as keyof CSSStyleDeclaration]}`)
		.join(';');
}
export const log = (...text: Parameters<typeof console.log>) => {
	text = text.map((t) => {
		if (typeof t === 'object') {
			try {
				return JSON.stringify(t, null, 2);
			} catch {
				return t.toString();
			}
		}
		return t;
	});
	console.log(...text);
	console.log('-----------------------------------------------');
};
