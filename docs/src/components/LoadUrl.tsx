import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Character } from './types';

interface UseLoadTeamFromURLProps {
	setCurrentTeam: (team: Character[]) => void; // Function to set the team
	setAvailableDP: (dp: number) => void; // Function to set the available DP
	allCharacters: Character[]; // The full character list for reference
}

// Hook to load the team from the URL (supports hash-based URLs)
const useLoadTeamFromURL = ({
	setCurrentTeam,
	allCharacters,
	setAvailableDP,
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

			const totalDPUsed = selectedTeam.reduce(
				(acc, character) => acc + Math.abs(character.value),
				0
			);

			// Update the available DP by subtracting the used DP from the default value (e.g., 15)
			setAvailableDP(15 - totalDPUsed);
		}
	}, [location.hash, setCurrentTeam, allCharacters, setAvailableDP]);
};

export default useLoadTeamFromURL;
