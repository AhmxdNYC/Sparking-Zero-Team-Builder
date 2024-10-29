import React from 'react';

import { DropDownListProps } from './types';

const DropDownList: React.FC<DropDownListProps> = ({
	data,
	searchTerm,
	filterBy,
	availableDP,
	onSelectCharacter,
	handleExit,
}) => {
	// Filter characters based on search term and filter type (name or ability)
	const filteredData = data
		.filter((character) => {
			if (filterBy === 'name') {
				return character.name.toLowerCase().includes(searchTerm.toLowerCase());
			} else if (filterBy === 'ability') {
				return character.abilities.some((ability) =>
					ability.name.toLowerCase().includes(searchTerm.toLowerCase())
				);
			}
			return false;
		})
		.sort((a, b) => a.name.localeCompare(b.name)); // Sort characters by name alphabetically

	return (
		<>
			{/* Scrollable Dropdown List */}
			<div className='relative z-20 top-4 sm:top-4'>
				<div className='absolute left-0 right-0 w-[85%] mx-auto bg-gray-900 border border-gray-300 rounded-lg shadow-lg overflow-y-auto overflow-x-hidden custom-scrollbar max-h-[40.5rem] sm:max-h-[32.5rem] sm:w-full'>
					<ul className='grid grid-cols-1 gap-2 p-2 list-none sm:grid-cols-4'>
						{filteredData.length > 0 ? (
							filteredData.map((character, index) => {
								const characterValue = Math.abs(character.value);
								const tooExpensive = characterValue > availableDP;

								return (
									<div
										key={index}
										className='relative Char-Card left-6 sm:left-0 h-[120px] w-full'>
										{/* Outline Shape */}
										<div className='absolute inset-0 z-0 Char-Card-Outline'></div>

										{/* Background Shape */}
										<div className='absolute inset-0 z-10 Char-Card-Background'></div>

										{/* Card Content */}
										<div
											className={`relative w-full h-[120px] flex justify-between items-center gap-0 p-3 bg-transparent rounded-lg transition duration-300 ease-in-out sm:w-full ${
												tooExpensive ? 'cursor-not-allowed' : ''
											}`}
											onClick={() => {
												if (tooExpensive) {
													alert('Not enough DP to add this character!');
												} else {
													onSelectCharacter(character);
													handleExit();
												}
											}}>
											{/* Name and DP */}
											<li
												className={`z-10 flex-1 text-lg font-open-sans font-bold italic max-w-[38%] text-center ${
													tooExpensive ? 'text-gray-500' : 'text-gray-200'
												}`}>
												{character.name}
												<br />
												<span className='text-gray-400'>DP:</span>
												<span className='font-semibold'>
													{characterValue.toString()}
												</span>
											</li>

											{/* Profile Image */}
											<div className='relative z-10 right-7 w-28 h-28 hex-img sm:right-0 sm:left-4 sm:top-2 lg:top-0 lg:left-0'>
												<img
													src={character.img}
													alt={character.name}
													width={110}
													height={110}
													className={`hexagon shadow ${
														tooExpensive
															? 'filter brightness-10 contrast-100 grayscale-100 opacity-50'
															: ''
													}`}
												/>
											</div>
										</div>
									</div>
								);
							})
						) : (
							<li className='text-center text-gray-500'>No results found</li>
						)}
					</ul>
				</div>
			</div>
		</>
	);
};

export default DropDownList;
