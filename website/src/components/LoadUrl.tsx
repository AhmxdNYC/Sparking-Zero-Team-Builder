import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Character {
	name: string;
	value: number;
	img: string;
}

interface UseLoadTeamFromURLProps {
	setCurrentTeam: (team: Character[]) => void; // Function to set the team
	allCharacters: Character[]; // The full character list for reference
}

// Hook to load the team from the URL
const useLoadTeamFromURL = ({
	setCurrentTeam,
	allCharacters,
}: UseLoadTeamFromURLProps) => {
	const location = useLocation();

	useEffect(() => {
		// Parse the query string from the URL
		const params = new URLSearchParams(location.search);
		const teamParam = params.get('team');

		if (teamParam) {
			// Deserialize the character names from the URL
			const characterNames = decodeURIComponent(teamParam).split(',');

			// Filter the characters based on the names in the URL
			const selectedTeam = allCharacters.filter((character) =>
				characterNames.includes(character.name)
			);

			// Set the current team based on the selected characters
			setCurrentTeam(selectedTeam);
		}
	}, [location.search, setCurrentTeam, allCharacters]);
};

export default useLoadTeamFromURL;
