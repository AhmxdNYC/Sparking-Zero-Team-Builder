import { Character } from '../../types';
import { RandomCharacterPicker } from './ranCharacterPicker';

const validateUniqueCharacters = (
	selectedCharacters: Character[],
	characters: Character[],
	generatedTeamPoints: number[],
	manualSelectedCharacters: Character[],
	retries = 5
): Character[] => {
	const names = selectedCharacters.map((character) => character.name);
	const uniqueNames = new Set(names);

	if (names.length !== uniqueNames.size && retries > 0) {
		console.log('Duplicate characters found, regenerating team...');
		const newSelectedCharacters = RandomCharacterPicker(
			characters,
			generatedTeamPoints,
			manualSelectedCharacters
		);
		return validateUniqueCharacters(
			newSelectedCharacters,
			characters,
			generatedTeamPoints,
			manualSelectedCharacters,
			retries - 1
		);
	}

	return selectedCharacters;
};

export default validateUniqueCharacters;
