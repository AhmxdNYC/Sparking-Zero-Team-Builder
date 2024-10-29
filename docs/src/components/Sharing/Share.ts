interface Character {
	name: string;
	value: number;
	img: string; // URL for general use, like displaying in the UI
}

// Function to generate a short 3-character ID
const generateShortId = (): string => {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < 3; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters[randomIndex];
	}
	return result;
};

// Serialize the team to a URL-friendly string
const serializeTeam = (team: Character[]): string => {
	const characterNames = team.map((character) => character.name).join(',');
	return encodeURIComponent(characterNames);
};

// Generate the shareable link
export const generateShareableLink = (currentTeam: Character[]): string => {
	const serializedTeam = serializeTeam(currentTeam);
	const shortId = generateShortId(); // Generate a short 3-character ID
	const shareableLink = `https://sparking-zero-team-builder.vercel.app/api/share?team=${serializedTeam}&id=${shortId}`;
	console.log('Generated shareable link:', shareableLink);
	return shareableLink;
};
