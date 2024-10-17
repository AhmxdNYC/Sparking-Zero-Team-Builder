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
	useLoadTeamFromURL({ setCurrentTeam, allCharacters: characters });

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
		setCurrentTeam([]);
		setAvailableDP(15);
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
		<div className='min-h-screen bg-gray-900 text-white p-6'>
			<div className='container mx-auto max-w-5xl'>
				<h1 className='text-4xl font-bold mb-4 text-center'>
					Sparking Zero Team Builder
				</h1>
				<p className='text-gray-300 text-lg mb-8 text-center'>
					Build and share teams easily while having access to character stats
					and notes.
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
