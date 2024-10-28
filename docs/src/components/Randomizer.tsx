/* eslint-disable prefer-const */
'use client';
import React, { useEffect, useState } from 'react';
import { RandomCharacterPicker } from './ranCharSelect';
import { Character } from './Tracker';

interface GameTeamRandomizerProps {
	availableDP: number;
	setAvailableDP: (dp: number) => void;
	characters: Character[]; // Available character pool
	setCurrentTeam: (team: Character[]) => void; // Function to update the current team
	currentTeam: Character[]; // Already selected characters
	teamCount: number;
	setTeamCount: (teamCount: number) => void;
}

const GameTeamRandomizer: React.FC<GameTeamRandomizerProps> = ({
	// availableDP,
	setAvailableDP,
	characters,
	setCurrentTeam,
	currentTeam, // Pass already selected characters as a prop
	teamCount,
	setTeamCount,
}) => {
	const [generatedTeam, setGeneratedTeam] = useState<Character[]>([]);
	const [manualSelectedCharacters, setManualSelectedCharacters] = useState<
		Character[]
	>([]);

	const MAX_POINTS = 15;
	const MAX_CHARACTERS = teamCount;
	const MAX_SINGLE_CHARACTER = 10;
	const MIN_SINGLE_CHARACTER = 1;

	// Randomly determine how many more characters can be added
	const getRandomNumOfCharacters = (remainingCharacters: number) => {
		return Math.min(Math.floor(Math.random() * remainingCharacters) + 1, 5);
	};

	// Check if the team already has a 1-point character
	const hasOnePointCharacter = currentTeam.some(
		(character) => Math.abs(character.value) === MIN_SINGLE_CHARACTER
	);

	// Distribute points randomly across new characters, ensuring only one 1-point character
	const distributePointsRandomly = (
		remainingPoints: number,
		numCharacters: number,
		hasOnePointCharacter: boolean
	) => {
		const distributedPoints = [];
		let pointsLeft = remainingPoints;

		for (let i = 0; i < numCharacters - 1; i++) {
			let randomPoint;

			// If a 1-point character already exists, don't generate another
			if (hasOnePointCharacter) {
				// Ensure random points between 2 and MAX_SINGLE_CHARACTER
				randomPoint =
					Math.floor(Math.random() * (MAX_SINGLE_CHARACTER - 1)) + 2;
			} else {
				// Generate random points with 1-point character less likely (e.g., only 5% chance)
				randomPoint =
					Math.random() < 0.01
						? 1
						: Math.floor(Math.random() * (MAX_SINGLE_CHARACTER - 1)) + 2;
			}

			// If a 1-point character is generated, set the flag
			if (randomPoint === 1) {
				hasOnePointCharacter = true;
			}

			distributedPoints.push(randomPoint);
			pointsLeft -= randomPoint;
		}

		// Make sure the last character's points are valid
		let lastCharacterPoints = Math.max(1, pointsLeft);
		if (hasOnePointCharacter && lastCharacterPoints === MIN_SINGLE_CHARACTER) {
			// If a 1-point character already exists, adjust the last character's points
			lastCharacterPoints =
				Math.floor(
					Math.random() * (MAX_SINGLE_CHARACTER - MIN_SINGLE_CHARACTER)
				) + 2;
		}

		// Regenerate if the last character's points exceed MAX_SINGLE_CHARACTER
		while (lastCharacterPoints > MAX_SINGLE_CHARACTER) {
			lastCharacterPoints =
				Math.floor(Math.random() * MAX_SINGLE_CHARACTER) + 2;
		}

		distributedPoints.push(lastCharacterPoints);

		return distributedPoints;
	};

	// Validate that no characters have the same name, regenerate if duplicates exist
	const validateUniqueCharacters = (
		selectedCharacters: Character[],
		retries = 5
	): Character[] => {
		const names = selectedCharacters.map((character) => character.name);
		const uniqueNames = new Set(names);

		if (names.length !== uniqueNames.size && retries > 0) {
			console.log('Duplicate characters found, regenerating team...');
			const generatedTeamPoints = generateRandomTeam();
			const newSelectedCharacters = RandomCharacterPicker(
				characters,
				generatedTeamPoints,
				manualSelectedCharacters // Pre-selected characters to exclude by name
			);
			return validateUniqueCharacters(newSelectedCharacters, retries - 1);
		}

		return selectedCharacters; // Return the valid, unique team
	};
	const generateRandomTeam = () => {
		const manualSelectedCharacters = currentTeam.filter(
			(char) => !generatedTeam.includes(char)
		);

		const manualSelectedPoints = manualSelectedCharacters.reduce(
			(acc, character) => acc + Math.abs(character.value),
			0
		);

		let remainingPoints = MAX_POINTS - manualSelectedPoints;
		const remainingCharacters =
			MAX_CHARACTERS - manualSelectedCharacters.length;

		if (remainingPoints <= 0 || remainingCharacters <= 0) {
			console.log('No more characters can be added');
			return [];
		}

		let distributedPoints;

		// Special handling for a team of 2 with a low-point pre-selected character
		if (
			teamCount === 2 &&
			manualSelectedCharacters.length === 1 &&
			manualSelectedPoints <= 5
		) {
			distributedPoints = [10]; // Set the second character to have 10 points
		} else {
			let totalDistributedPoints;
			do {
				let numCharactersToAdd =
					teamCount === 6
						? getRandomNumOfCharacters(remainingCharacters)
						: teamCount;

				if (manualSelectedCharacters.length > 0) {
					numCharactersToAdd = Math.max(
						1,
						numCharactersToAdd - manualSelectedCharacters.length
					);
				}

				numCharactersToAdd = Math.min(numCharactersToAdd, remainingCharacters);

				distributedPoints = distributePointsRandomly(
					remainingPoints,
					numCharactersToAdd,
					hasOnePointCharacter
				);

				totalDistributedPoints = distributedPoints.reduce(
					(acc, val) => acc + val,
					0
				);

				if (totalDistributedPoints !== remainingPoints) {
					console.log(
						`Total points ${totalDistributedPoints} do not match remaining points. Regenerating...`
					);
				}
			} while (totalDistributedPoints !== remainingPoints);
		}

		return distributedPoints;
	};
	const handleGenerateTeam = () => {
		// Get the manually selected characters
		const manualSelectedCharacters = currentTeam.filter(
			(char) => !generatedTeam.includes(char)
		);

		setManualSelectedCharacters(manualSelectedCharacters);

		// Generate points for the additional characters needed
		const generatedTeamPoints = generateRandomTeam();

		if (generatedTeamPoints.length > 0) {
			// Pick characters based on generated points
			let newGeneratedCharacters = RandomCharacterPicker(
				characters,
				generatedTeamPoints,
				manualSelectedCharacters
			);

			// Ensure no duplicates in the new team
			newGeneratedCharacters = validateUniqueCharacters(newGeneratedCharacters);

			// Merge manual selections with generated characters for updated team
			const updatedTeam = [
				...manualSelectedCharacters,
				...newGeneratedCharacters,
			];

			// Log for debugging
			console.log('Manual Selected Characters:', manualSelectedCharacters);
			console.log('Generated Characters:', newGeneratedCharacters);
			console.log('Updated Team:', updatedTeam);

			// Set the updated team and clear previous generation
			setCurrentTeam(updatedTeam);
			setGeneratedTeam(newGeneratedCharacters);

			// Dynamically calculate available DP
			const totalPointsUsed = updatedTeam.reduce(
				(acc, char) => acc + Math.abs(char.value),
				0
			);
			const updatedAvailableDP = MAX_POINTS - totalPointsUsed;

			setAvailableDP(Math.max(updatedAvailableDP, 0)); // Ensure DP does not go negative
		} else {
			console.error('Failed to generate a valid team. Try again.');
		}
	};

	useEffect(() => {
		// Keep only manually selected characters
		const manualSelectedCharacters = currentTeam.filter(
			(char) => !generatedTeam.includes(char)
		);

		// Calculate the points for manually selected characters
		const manualSelectedPoints = manualSelectedCharacters.reduce(
			(acc, character) => acc + Math.abs(character.value),
			0
		);

		// Update the current team to keep only manually selected characters
		setCurrentTeam(manualSelectedCharacters);

		// Update the available DP to reflect the points of manually selected characters
		setAvailableDP(MAX_POINTS - manualSelectedPoints); // Subtract from MAX_POINTS
		setGeneratedTeam([]); // Clear the previously generated characters
	}, [teamCount]);

	return (
		<div>
			<div className='relative'>
				<select
					className='p-2 text-white bg-gray-900 border border-gray-300 rounded-md focus:outline-none'
					onChange={(e) => setTeamCount(+e.target.value)}
					value={teamCount}>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
					<option value='6'>2-5</option>
				</select>
			</div>
			<button
				onClick={handleGenerateTeam}
				className='mt-6 bg-[rgb(0,0,255)] text-white px-6 py-3 rounded-md font-open-sans font-bold shadow hover:shadow-lg transition transform hover:scale-105'>
				Random Gen (Char or Team)
			</button>
			<p className='p-2 text-sm italic font-open-sans'>
				Click Again To Shuffle
			</p>
		</div>
	);
};

export default GameTeamRandomizer;
