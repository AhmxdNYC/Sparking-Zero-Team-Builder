'use client';
import React from 'react';

interface TrackerProps {
	availableDP: number;
	currentTeam: Array<{ name: string; value: number; img: string }>;
	resetTeam: () => void;
	removeCharacter: (index: number) => void;
}

const Tracker: React.FC<TrackerProps> = ({
	availableDP,
	currentTeam,
	resetTeam,
	removeCharacter,
}) => {
	return (
		<>
			<p>DP Available: {availableDP}</p>
			<h2>Current Team</h2>
			<ul className='flex gap-4 justify-center flex-wrap'>
				{currentTeam.map((character, index) => (
					<div
						key={character.name}
						className='flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out'
						style={{ width: '190px', height: '250px' }} // Set consistent card size
					>
						<li className='flex flex-col items-center'>
							{/* Hexagon image styling */}
							<div className='relative w-20 h-20 mb-2'>
								<img
									src={character.img}
									alt={character.name}
									className='hexagon object-cover w-full h-full'
								/>
							</div>

							{/* Character name and DP */}
							<div className='text-center'>
								<p className='text-lg font-semibold'>{character.name}</p>
								<p className='text-sm text-gray-400'>DP: {character.value}</p>
							</div>

							{/* Placeholder for abilities or additional info */}
							<div className='text-center mt-2'>
								{/* You can add abilities or other information here */}
								<p className='text-xs text-gray-300'>Abilities: Coming soon</p>
							</div>
						</li>

						<button
							onClick={() => removeCharacter(index)}
							className='mt-auto text-red-500 hover:text-red-700 transition'>
							Remove
						</button>
					</div>
				))}
			</ul>

			<button
				onClick={resetTeam}
				className='mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-md shadow hover:shadow-lg transition transform hover:scale-105'>
				Reset Team
			</button>
		</>
	);
};

export default Tracker;
