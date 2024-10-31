import { CharacterURL } from '../types';

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

const serializeTeam = (team: CharacterURL[]): string => {
	const characterNames = team.map((character) => character.name).join(',');
	return encodeURIComponent(characterNames);
};

export const generateShareableLink = (currentTeam: CharacterURL[]): string => {
	const serializedTeam = serializeTeam(currentTeam);
	const shortId = generateShortId();
	const shareableLink = `https://sparking-zero-team-builder.vercel.app/api/share?team=${serializedTeam}&id=${shortId}`;
	console.log('Generated shareable link:', shareableLink);
	return shareableLink;
};
