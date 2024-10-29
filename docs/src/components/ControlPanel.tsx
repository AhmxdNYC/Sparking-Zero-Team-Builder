import React, { useEffect, useState } from 'react';
import { Character, ControlPanelProps } from './types';
import getRandomNumOfCharacters from './RandomSelect/utils/getRandomNumOfCharacters';
import distributePointsRandomly from './RandomSelect/utils/distributePointsRandomly';
import { RandomCharacterPicker } from './RandomSelect/utils/ranCharacterPicker';
import validateUniqueCharacters from './RandomSelect/utils/validateUniqueCharacters';

const ControlPanel: React.FC<ControlPanelProps> = ({
	onResetTeam,
	onAddCharacter,
	onGenerateLink,
	availableDP,
	setAvailableDP,
	characters,
	setCurrentTeam,
	currentTeam,
	setTeamCount,
	teamCount,
}) => {
	const [generatedTeam, setGeneratedTeam] = useState<Character[]>([]);
	const [, setManualSelectedCharacters] = useState<Character[]>([]);

	const MAX_POINTS = 15;
	const MAX_CHARACTERS = teamCount;
	const MAX_SINGLE_CHARACTER = 10;
	const MIN_SINGLE_CHARACTER = 1;

	const generateRandomTeam = () => {
		const manualSelectedCharacters = currentTeam.filter(
			(char) => !generatedTeam.includes(char)
		);

		if (teamCount === 1 && manualSelectedCharacters.length === 1) {
			const preSelectedPoints = [Math.abs(manualSelectedCharacters[0].value)];
			return preSelectedPoints;
		}

		const manualSelectedPoints = manualSelectedCharacters.reduce(
			(acc, character) => acc + Math.abs(character.value),
			0
		);

		const remainingPoints = MAX_POINTS - manualSelectedPoints;
		const remainingCharacters =
			MAX_CHARACTERS - manualSelectedCharacters.length;

		if (teamCount === 1 && availableDP === 0) {
			const randomPoints =
				Math.floor(
					Math.random() * (MAX_SINGLE_CHARACTER - MIN_SINGLE_CHARACTER + 1)
				) + MIN_SINGLE_CHARACTER;
			return [randomPoints];
		}

		if (remainingPoints <= 0 || remainingCharacters <= 0) {
			console.log('No more characters can be added');
			return [];
		}

		let distributedPoints;

		// Check if the team already has a 1-point character
		const hasOnePointCharacter = currentTeam.some(
			(character) => Math.abs(character.value) === MIN_SINGLE_CHARACTER
		);

		if (
			teamCount === 2 &&
			manualSelectedCharacters.length === 1 &&
			manualSelectedPoints <= 5
		) {
			distributedPoints = [10];
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
					hasOnePointCharacter,
					MAX_SINGLE_CHARACTER,
					MIN_SINGLE_CHARACTER
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
		const manualSelectedCharacters = currentTeam.filter(
			(char) => !generatedTeam.includes(char)
		);

		const manualSelectedPoints1 = manualSelectedCharacters.reduce(
			(acc, character) => acc + Math.abs(character.value),
			0
		);
		console.log('manualSelectedPoints1:', manualSelectedPoints1);
		if (manualSelectedPoints1 >= 9 && teamCount === 5) {
			setTeamCount(4);
			alert(
				'Team 5 is not allowed to have more than 9 points, Click again for team 4'
			);
			return;
		}
		if (
			manualSelectedPoints1 < 5 &&
			manualSelectedPoints1 !== 0 &&
			teamCount === 2
		) {
			setTeamCount(3);
			alert(
				'Team 2 is not allowed to have less than 5 points, Click again for team 3'
			);
			return;
		}
		setManualSelectedCharacters(manualSelectedCharacters);

		const generatedTeamPoints = generateRandomTeam();

		if (generatedTeamPoints.length > 0) {
			let newGeneratedCharacters = RandomCharacterPicker(
				characters,
				generatedTeamPoints,
				manualSelectedCharacters
			);

			newGeneratedCharacters = validateUniqueCharacters(
				newGeneratedCharacters,
				characters,
				generatedTeamPoints,
				manualSelectedCharacters
			);

			const updatedTeam = [
				...manualSelectedCharacters,
				...newGeneratedCharacters,
			];

			console.log('Manual Selected Characters:', manualSelectedCharacters);
			console.log('Generated Characters:', newGeneratedCharacters);
			console.log('Updated Team:', updatedTeam);

			setCurrentTeam(updatedTeam);
			setGeneratedTeam(newGeneratedCharacters);

			const totalPointsUsed = updatedTeam.reduce(
				(acc, char) => acc + Math.abs(char.value),
				0
			);
			const updatedAvailableDP = MAX_POINTS - totalPointsUsed;

			setAvailableDP(Math.max(updatedAvailableDP, 0));
		} else {
			console.error('Failed to generate a valid team. Try again.');
		}
	};

	useEffect(() => {
		const manualSelectedCharacters = currentTeam.filter(
			(char) => !generatedTeam.includes(char)
		);

		const manualSelectedPoints = manualSelectedCharacters.reduce(
			(acc, character) => acc + Math.abs(character.value),
			0
		);

		setCurrentTeam(manualSelectedCharacters);
		setAvailableDP(MAX_POINTS - manualSelectedPoints);
		setGeneratedTeam([]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [teamCount]);

	return (
		<div className='flex flex-col items-center gap-4 p-4 mx-auto bg-gray-800 rounded-lg shadow-md sm:flex-row sm:justify-around w-[50%] sm:w-full'>
			<button
				onClick={onAddCharacter}
				className='w-full px-6 py-3 text-white transition transform bg-blue-500 rounded-md shadow hover:shadow-lg hover:scale-105 sm:w-auto'>
				Add Character
			</button>
			<button
				onClick={onGenerateLink}
				className='w-full px-6 py-3 text-white transition transform bg-green-500 rounded-md shadow hover:shadow-lg hover:scale-105 sm:w-auto'>
				Share Team!
			</button>
			<button
				onClick={onResetTeam}
				className='w-full px-6 py-3 text-white transition transform bg-red-500 rounded-md shadow hover:shadow-lg hover:scale-105 sm:w-auto'>
				Reset Team
			</button>
			<button
				onClick={handleGenerateTeam}
				className='w-full px-6 py-3 text-white transition transform bg-purple-500 rounded-md shadow hover:shadow-lg hover:scale-105 sm:w-auto'>
				Random Gen (Char or Team)
			</button>
			<div className='relative w-full sm:w-auto'>
				<select
					className='w-full p-2 text-white bg-gray-900 border border-gray-300 rounded-md focus:outline-none'
					onChange={(e) => setTeamCount(+e.target.value)}
					value={teamCount}>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
					<option value='6'>2-5</option>
				</select>
			</div>
		</div>
	);
};

export default ControlPanel;
