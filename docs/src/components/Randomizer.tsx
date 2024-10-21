/* eslint-disable prefer-const */
'use client';
import React, { useState } from 'react';
import { RandomCharacterPicker } from './ranCharSelect';
import { Character } from './Tracker';

// skewed towards 2 points and above since hercule is 1 point and no one wants him
interface GameTeamRandomizerProps {
	availableDP: number;
	setAvailableDP: (dp: number) => void;
	characters: Character[]; // Available character pool
	setCurrentTeam: (team: Character[]) => void; // Function to update the current team
	currentTeam: Character[]; // Already selected characters
}

const GameTeamRandomizer: React.FC<GameTeamRandomizerProps> = ({
	availableDP,
	setAvailableDP,
	characters,
	setCurrentTeam,
	currentTeam, // Pass already selected characters as a prop
}) => {
	const [generatedTeam, setGeneratedTeam] = useState<Character[]>([]);

	const MAX_POINTS = 15;
	const MAX_CHARACTERS = 5;
	const MAX_SINGLE_CHARACTER = 10;
	const MIN_SINGLE_CHARACTER = 1;

	// Randomly determine how many more characters can be added
	const getRandomNumOfCharacters = (remainingCharacters: number) => {
		return Math.floor(Math.random() * remainingCharacters) + 1;
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

		// Get minimum amount between max points and (points left - number of characters while leaving atleasst 1 point for the next character)
		// Generate random point starting from 1 up to that minimum
		// Changed to -2 might make better teams but not sure
		for (let i = 0; i < numCharacters - 1; i++) {
			let randomPoint = Math.max(
				2,
				Math.floor(
					Math.random() *
						Math.min(pointsLeft - (numCharacters - i - 2), MAX_SINGLE_CHARACTER)
				)
			);

			// Make sure random point is not 1 if there is already a 1-point character
			// Incase if 0 or 1 add 2
			if (hasOnePointCharacter && randomPoint === MIN_SINGLE_CHARACTER) {
				randomPoint = Math.floor(
					Math.random() * (MAX_SINGLE_CHARACTER - MIN_SINGLE_CHARACTER) + 2
				);
			}
			distributedPoints.push(randomPoint);
			pointsLeft -= randomPoint;
		}
		// Make sure last character gets alteast 2 if 1 exists and 1 if not
		let lastCharacterPoints = Math.max(1, pointsLeft);
		if (hasOnePointCharacter && lastCharacterPoints === MIN_SINGLE_CHARACTER) {
			lastCharacterPoints =
				Math.floor(
					Math.random() * (MAX_SINGLE_CHARACTER - MIN_SINGLE_CHARACTER)
				) + 2;
		}

		// Regenerate if the last character's points exceed 10
		// atleast 2
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
				generatedTeamPoints
			);
			return validateUniqueCharacters(newSelectedCharacters, retries - 1);
		}

		return selectedCharacters; // Return the valid, unique team
	};

	const generateRandomTeam = () => {
		// Filters out manually selected characters and calculates their total points

		const manualSelectedPoints = currentTeam
			.filter((char) => !generatedTeam.includes(char))
			.reduce((acc, character) => acc + Math.abs(character.value), 0);

		let remainingPoints = MAX_POINTS - manualSelectedPoints;

		// Get remaining characters that can be added to the team by excluding characters already present (prior gen or manual)
		const remainingCharacters =
			MAX_CHARACTERS -
			currentTeam.filter((char) => !generatedTeam.includes(char)).length;

		// When to stop generating characters
		if (remainingPoints <= 0 || remainingCharacters <= 0) {
			console.log('No more characters can be added');
			return [];
		}

		let distributedPoints;
		let totalDistributedPoints;

		do {
			// Randomly determine how many more characters to add
			const numCharactersToAdd = getRandomNumOfCharacters(remainingCharacters);

			// Ensure the number of generated characters and their points don't exceed available DP
			distributedPoints = distributePointsRandomly(
				remainingPoints,
				numCharactersToAdd,
				hasOnePointCharacter
			);

			totalDistributedPoints = distributedPoints.reduce(
				(acc, val) => acc + val,
				0
			);

			// If the total points don't add up to the required remaining points, regenerate
			if (totalDistributedPoints !== remainingPoints) {
				console.log(
					`Total points ${totalDistributedPoints} do not match remaining points. Regenerating...`
				);
			}
		} while (totalDistributedPoints !== remainingPoints); // Regenerate until points match remaining DP

		console.log(
			`Generated team points: ${distributedPoints} = ${totalDistributedPoints}`
		);
		return distributedPoints;
	};

	const handleGenerateTeam = () => {
		// Get the manually selected characters from the current team
		const manualSelectedCharacters = currentTeam.filter(
			(char) => !generatedTeam.includes(char)
		);

		// Generate points for the new characters
		const generatedTeamPoints = generateRandomTeam();
		if (generatedTeamPoints.length > 0) {
			// Use the RandomCharacterPicker to filter and randomly pick characters based on generated points
			let newGeneratedCharacters = RandomCharacterPicker(
				characters,
				generatedTeamPoints
			);

			// Ensure no duplicate names, regenerate if necessary ✅
			newGeneratedCharacters = validateUniqueCharacters(newGeneratedCharacters);

			// Update the state for the newly generated characters and current team
			setGeneratedTeam(newGeneratedCharacters); // Update generated characters
			setCurrentTeam([...manualSelectedCharacters, ...newGeneratedCharacters]); // Update the team

			// Update available DP based on the newly generated team
			const totalTeamPoints = generatedTeamPoints.reduce(
				(acc, curr) => acc + curr,
				0
			);
			setAvailableDP(Math.max(availableDP - totalTeamPoints, 0)); // Decrease available DP but ensure it never goes negative
		} else {
			console.error('Failed to generate a valid team. Try again.');
		}
	};

	return (
		<div>
			<button
				onClick={handleGenerateTeam}
				className='mt-6  bg-[rgb(0,0,255)] text-white px-6 py-3 rounded-md font-open-sans font-bold  shadow hover:shadow-lg transition transform hover:scale-105'>
				Random Gen (Char or Team)
			</button>
		</div>
	);
};

export default GameTeamRandomizer;
