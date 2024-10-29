interface Character {
	name: string;
	value: number;
	img: string; // URL for general use, like displaying in the UI
}
//
// Serialize the team to a URL-friendly string
const serializeTeam = (team: Character[]): string => {
	const characterNames = team.map((character) => character.name).join(',');
	return encodeURIComponent(characterNames);
};

// Generate the shareable link
export const generateShareableLink = (currentTeam: Character[]): string => {
	const serializedTeam = serializeTeam(currentTeam);
	// Use the Vercel deployment URL instead
	const shareableLink = `https://sparking-zero-team-builder.vercel.app/api/share?team=${serializedTeam}`;
	console.log('Generated shareable link:', shareableLink);
	return shareableLink;
};
