import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { UseLoadTeamFromURLProps } from '../types';

// Hook to load the team from the URL (supports hash-based URLs)
const useLoadTeamFromURL = ({
	setCurrentTeam,
	allCharacters,
	setAvailableDP,
}: UseLoadTeamFromURLProps) => {
	const location = useLocation();

	useEffect(() => {
		// Check the hash portion of the URL
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

			const selectedTeam = allCharacters.filter((character) =>
				characterNames.includes(character.name)
			);
			console.log('Selected team based on URL:', selectedTeam);

			setCurrentTeam(selectedTeam);

			const totalDPUsed = selectedTeam.reduce(
				(acc, character) => acc + Math.abs(character.value),
				0
			);

			setAvailableDP(15 - totalDPUsed);
		}
	}, [location.hash, setCurrentTeam, allCharacters, setAvailableDP]);
};

export default useLoadTeamFromURL;
