'use client';
import React from 'react';
import { TrackerProps } from './types';

const Tracker: React.FC<TrackerProps> = ({
	availableDP,
	currentTeam,
	removeCharacter,
}) => {
	console.log('cur team', currentTeam);
	return (
		<>
			<p className='text-2xl italic font-bold text-center font-open-sans'>
				DP Available: {availableDP}
			</p>
			<h2 className='mb-5 text-2xl italic font-bold text-center font-open-sans'>
				Team
			</h2>
			<ul className='flex flex-wrap justify-center gap-4 mt-2'>
				{currentTeam
					.slice()
					.sort((a, b) => a.name.localeCompare(b.name))
					.map((character, index) => (
						<div
							key={index}
							className='flex flex-col items-center p-4 transition duration-300 ease-in-out bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700'
							style={{ width: '190px', height: '340px', overflow: 'hidden' }}>
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
								<div className='italic font-bold text-center font-open-sans'>
									<p className='text-lg'>{character.name}</p>
									<p className='text-sm text-gray-400'>DP: {character.value}</p>
								</div>

								{/* Abilities section */}
								<div
									className='relative mt-2 overflow-auto text-center custom-scrollbar'
									style={{ maxHeight: '100px' }} // limiting the height for scrolling
								>
									<p className='italic font-bold text-center text-white font-open-sans text-md'>
										Abilities
									</p>
									{character.abilities.map((ability, idx) => (
										<div
											key={idx}
											className='mb-2'>
											<p className='text-sm font-bold text-white font-open-sans'>
												{ability.name}
											</p>
											<div className='text-xs italic text-gray-300 font-open-sans'>
												{ability.description.map((desc, idx) => (
													<p key={idx}>{desc}</p>
												))}
											</div>
										</div>
									))}
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
		</>
	);
};

export default Tracker;
