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
