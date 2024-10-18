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

// Hook to load the team from the URL (supports hash-based URLs)
const useLoadTeamFromURL = ({
	setCurrentTeam,
	allCharacters,
}: UseLoadTeamFromURLProps) => {
	const location = useLocation();

	useEffect(() => {
		// For HashRouter, we need to check the hash portion of the URL
		const hash = location.hash || window.location.hash;
		console.log('Current location hash:', hash);

		// Parse the query string from the hash portion of the URL
		const params = new URLSearchParams(hash.replace('#/', ''));
		const teamParam = params.get('team');
		console.log('Parsed team parameter:', teamParam);

		if (teamParam) {
			// Deserialize the character names from the URL
			const characterNames = decodeURIComponent(teamParam).split(',');
			console.log('Character names from URL:', characterNames);

			// Filter the characters based on the names in the URL
			const selectedTeam = allCharacters.filter((character) =>
				characterNames.includes(character.name)
			);
			console.log('Selected team based on URL:', selectedTeam);

			// Set the current team based on the selected characters
			setCurrentTeam(selectedTeam);
		}
	}, [location.hash, setCurrentTeam, allCharacters]);
};

export default useLoadTeamFromURL;
