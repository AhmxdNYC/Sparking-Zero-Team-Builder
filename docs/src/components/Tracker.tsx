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
			<p className='text-2xl'>DP Available: {availableDP}</p>
			<h2 className='text-2xl'>Current Team</h2>
			<ul className='flex flex-wrap justify-center gap-4'>
				{currentTeam.map((character, index) => (
					<div
						key={character.name}
						className='flex flex-col items-center p-4 transition duration-300 ease-in-out bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700'
						style={{ width: '190px', height: '250px' }} // Set consistent card size
					>
						<li className='flex flex-col items-center'>
							{/* Hexagon image styling */}
							<div className='relative w-20 h-20 mb-2'>
								<img
									src={character.img}
									alt={character.name}
									className='object-cover w-full h-full hexagon'
								/>
							</div>

							{/* Character name and DP */}
							<div className='text-center'>
								<p className='text-lg font-semibold'>{character.name}</p>
								<p className='text-sm text-gray-400'>DP: {character.value}</p>
							</div>

							{/* Placeholder for abilities or additional info */}
							<div className='mt-2 text-center'>
								{/* You can add abilities or other information here */}
								<p className='text-xs text-gray-300'>Abilities: Coming soon</p>
							</div>
						</li>

						<button
							onClick={() => removeCharacter(index)}
							className='mt-auto text-red-500 transition hover:text-red-700'>
							Remove
						</button>
					</div>
				))}
			</ul>

			<button
				onClick={resetTeam}
				className='mt-6  bg-[rgb(0,0,255)] text-white px-6 py-3 rounded-md shadow hover:shadow-lg transition transform hover:scale-105'>
				Reset Team
			</button>
		</>
	);
};

export default Tracker;
