import ClassRoom from './0-classroom';

/**
 * @returns An array of classRooms
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
