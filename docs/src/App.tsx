import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Tracker from './components/Tracker';
import { characters } from './components/Char List';
import GameTeamRandomizer from './components/Randomizer';
import ShareableLinkGenerator from './components/Share';
import useLoadTeamFromURL from './components/LoadUrl'; // Import the custom hook

const App: React.FC = () => {
	const [availableDP, setAvailableDP] = useState(15);
	const [currentTeam, setCurrentTeam] = useState<
		Array<{ name: string; value: number; img: string }>
	>([]);

	// Load the team from the URL when the app starts
	useLoadTeamFromURL({
		setCurrentTeam,
		allCharacters: characters,
		setAvailableDP,
	});

	// Handle character selection
	const handleSelectCharacter = (character: {
		name: string;
		value: number;
		img: string;
	}) => {
		const characterValue = Math.abs(character.value);

		if (availableDP > 0 && availableDP >= characterValue) {
			setCurrentTeam((prevTeam) => [...prevTeam, character]);
			setAvailableDP((prevDP) => prevDP - characterValue);
		} else {
			alert('Not enough DP to add this character!');
		}
	};

	// Reset the team and available DP
	const resetTeam = () => {
		// Reset the team and available DP
		setCurrentTeam([]);
		setAvailableDP(15);

		// Update the URL to remove the 'team' parameter
		const baseUrl = `${window.location.origin}${window.location.pathname}`;
		window.history.replaceState({}, document.title, baseUrl);
	};

	// Remove a character and restore the available DP
	const removeCharacter = (index: number) => {
		const removedCharacter = currentTeam[index];
		const removedCharacterValue = Math.abs(removedCharacter.value);
		const newTeam = currentTeam.filter((_, i) => i !== index);
		setCurrentTeam(newTeam);
		setAvailableDP((prevDP) => prevDP + removedCharacterValue);
	};

	return (
		<div className='min-h-screen p-6 text-white bg-gray-900'>
			<div className='container max-w-5xl mx-auto'>
				<h1 className='mb-4 text-4xl font-bold text-center'>
					Sparking Zero Team Builder
				</h1>
				<p className='mb-8 text-lg text-center text-gray-300'>
					Build and share teams easily while having access to character stats
					and notes.
				</p>
				<p className='mb-8 text-lg text-center text-gray-300'>
					Note : The pictures aren't fully accurate but the names and DP points
					are! will be updated soon
				</p>
				<div className='flex justify-center mb-8'>
					<SearchBar
						data={characters}
						onSelectCharacter={handleSelectCharacter}
						availableDP={availableDP}
					/>
				</div>

				<div className='mb-8'>
					<GameTeamRandomizer
						availableDP={availableDP}
						setAvailableDP={setAvailableDP}
						characters={characters}
						setCurrentTeam={setCurrentTeam}
						currentTeam={currentTeam}
					/>
				</div>
				<Tracker
					availableDP={availableDP}
					currentTeam={currentTeam}
					resetTeam={resetTeam}
					removeCharacter={removeCharacter}
				/>

				<ShareableLinkGenerator
					currentTeam={currentTeam}
					// @ts-expect-error sds
					setCurrentTeam={setCurrentTeam}
					allCharacters={characters}
				/>
			</div>
		</div>
	);
};

export default App;
