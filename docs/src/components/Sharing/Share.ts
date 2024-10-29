interface Character {
	name: string;
	value: number;
	img: string; // URL for general use, like displaying in the UI
}

// Serialize the team to a URL-friendly string
const serializeTeam = (team: Character[]): string => {
	const characterNames = team.map((character) => character.name).join(',');
	return encodeURIComponent(characterNames);
};

// Generate the shareable link
export const generateShareableLink = (currentTeam: Character[]): string => {
	// Serialize the team for URL query parameter
	const serializedTeam = serializeTeam(currentTeam);

	// Get the image URLs for each character (we’re not combining them here)
	// const teamImages = currentTeam.map((character) => character.img);

	// Construct the shareable link to your static site, including the serialized team data
	const shareableLink = `https://ahmxdnyc.github.io/Sparking-Zero-Team-Builder/share.html?team=${serializedTeam}`;

	console.log('Generated shareable link:', shareableLink);
	return shareableLink;
};
