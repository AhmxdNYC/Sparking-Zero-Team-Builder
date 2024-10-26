import { Character } from './Tracker';

export const RandomCharacterPicker = (
	characters: Character[],
	points: number[],
	manualSelectedCharacters: Character[] // Pass in pre-selected characters to exclude them
): Character[] => {
	const selectedTeam: Character[] = [];
	const availableCharacters = characters.filter(
		(character) =>
			!manualSelectedCharacters.some(
				(selected) => selected.name === character.name
			)
	);

	points.forEach((point) => {
		const absPoint = Math.abs(point); // Use absolute points

		// Filter characters by point value and exclude already selected ones
		const matchingCharacters = availableCharacters.filter(
			(character) =>
				Math.abs(character.value) === absPoint &&
				!selectedTeam.some((selected) => selected.name === character.name)
		);

		if (matchingCharacters.length > 0) {
			// Randomly pick a character and add to selectedTeam
			const randomIndex = Math.floor(Math.random() * matchingCharacters.length);
			const selectedCharacter = matchingCharacters[randomIndex];
			selectedTeam.push(selectedCharacter);

			// Remove the selected character from availableCharacters to avoid duplicates
			const indexToRemove = availableCharacters.findIndex(
				(char) => char.name === selectedCharacter.name
			);
			if (indexToRemove > -1) {
				availableCharacters.splice(indexToRemove, 1);
			}
		}
	});

	return selectedTeam; // Return the selected team without duplicates
};
