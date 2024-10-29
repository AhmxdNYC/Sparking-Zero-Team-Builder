interface Character {
	name: string;
	value: number;
	img: string;
}

// Serialize the team to a URL-friendly string
const serializeTeam = (team: Character[]): string => {
	const characterNames = team.map((character) => character.name).join(',');
	return encodeURIComponent(characterNames);
};

// Generate the shareable link
export const generateShareableLink = (currentTeam: Character[]): string => {
	// Serialize the current team to a string
	const serializedTeam = serializeTeam(currentTeam);
	// Log the serialized team to ensure it's being generated correctly
	console.log('Serialized team:', serializedTeam);

	// Create the full URL with the team in the query parameter
	const shareableLink = `${window.location.origin}${window.location.pathname}#/?team=${serializedTeam}`;

	// Log the full shareable link to ensure it's correct
	console.log('Generated shareable link:', shareableLink);

	return shareableLink;
};
