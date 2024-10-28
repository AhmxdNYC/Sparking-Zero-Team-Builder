import { Character } from './Tracker';
export const RandomCharacterPicker = (
	characters: Character[],
	points: number[],
	manualSelectedCharacters: Character[]
): Character[] => {
	const selectedTeam: Character[] = [];

	// Filter out pre-selected characters from available characters
	let availableCharacters = characters.filter(
		(character) =>
			!manualSelectedCharacters.some(
				(selected) => selected.name === character.name
			)
	);

	points.forEach((point) => {
		const absPoint = Math.abs(point);

		// Filter characters by exact point match
		const matchingCharacters = availableCharacters.filter(
			(character) =>
				Math.abs(character.value) === absPoint &&
				!selectedTeam.some((selected) => selected.name === character.name)
		);

		if (matchingCharacters.length > 0) {
			const randomIndex = Math.floor(Math.random() * matchingCharacters.length);
			const selectedCharacter = matchingCharacters[randomIndex];
			selectedTeam.push(selectedCharacter);

			// Remove the selected character to avoid duplicates
			availableCharacters = availableCharacters.filter(
				(char) => char.name !== selectedCharacter.name
			);
		} else {
			console.warn(`No character found with ${point} points`);
		}
	});

	return selectedTeam;
};
