interface Character {
	name: string;
	value: number;
	img: string; // URL for general use, like displaying in the UI
	imagePublicId?: string; // Cloudinary public ID for dynamic image generation
}

// Serialize the team to a URL-friendly string
const serializeTeam = (team: Character[]): string => {
	const characterNames = team.map((character) => character.name).join(',');
	return encodeURIComponent(characterNames);
};
const assignImagePublicId = (team: Character[]): Character[] => {
	return team.map((character) => ({
		...character,
		imagePublicId:
			character.name.replace(/\s+/g, '_').toLowerCase() + '_public_id',
	}));
};

export const generateTeamImageURL = (characters: Character[]): string => {
	const baseURL = 'https://res.cloudinary.com/dtrjyrqlh/image/upload';

	const overlays = characters
		.map(
			(char, index) =>
				// Adjust `x_` and `y_` coordinates to place images correctly (e.g., in a grid)
				`l_${char.imagePublicId},w_150,h_150,c_fill,g_faces,x_${
					(index % 2) * 160
				},y_${Math.floor(index / 2) * 160}`
		)
		.join('/');

	return `${baseURL}/${overlays}/team_image.png`;
};
// Generate the shareable link
export const generateShareableLink = (currentTeam: Character[]): string => {
	// First, assign public IDs to each character in the team
	const teamWithPublicIds = assignImagePublicId(currentTeam);

	// Generate the Cloudinary composite image URL for the team
	const teamImageURL = generateTeamImageURL(teamWithPublicIds);

	// Serialize the team for URL query parameter (optional if needed for additional team data)
	const serializedTeam = serializeTeam(currentTeam);

	// Construct the shareable link to your GitHub Pages or static site, including team image URL
	const shareableLink = `${
		window.location.origin
	}/share.html?og:image=${encodeURIComponent(
		teamImageURL
	)}&team=${serializedTeam}`;

	// Log the full shareable link to ensure it's correct
	console.log('Generated shareable link:', shareableLink);

	return shareableLink;
};
