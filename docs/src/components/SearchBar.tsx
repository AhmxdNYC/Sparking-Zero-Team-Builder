'use client';
import React, { useState } from 'react';

interface Character {
	name: string;
	value: number;
	img: string;
}

interface SearchBarProps {
	data: Character[];
	availableDP: number; // Add available DP as prop
	onSelectCharacter: (character: Character) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
	data,
	availableDP,
	onSelectCharacter,
}) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [visible, setVisible] = useState<boolean>(false);

	// Filter the list based on the search term
	const filteredData = data.filter((character) =>
		character.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Check if the character is too expensive
	const isTooExpensive = (characterValue: number) => {
		return Math.abs(characterValue) > availableDP; // Compare DP value
	};

	return (
		<div className='w-full'>
			{/* Input field for searching */}
			<div className='z-20 flex w-full mx-auto top-15'>
				<input
					type='text'
					placeholder='Search...'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onFocus={() => setVisible(true)}
					onBlur={() => setTimeout(() => setVisible(false), 200)}
					className='w-[50%] sm:w-[25%] p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 text-black mx-auto'
				/>
			</div>

			{/* Scrollable dropdown list */}
			{visible && (
				<div className='relative z-20 top-4'>
					<div className='absolute left-0 right-0 w-[85%] mx-auto bg-gray-900 border border-gray-300 rounded-lg shadow-lg max-h-[32.5rem] overflow-y-auto overflow-x-hidden custom-scrollbar'>
						<ul className='grid grid-cols-1 gap-2 p-2 list-none sm:grid-cols-4'>
							{filteredData.length > 0 ? (
								filteredData.map((character, index) => {
									const characterValue = Math.abs(character.value);
									const tooExpensive = isTooExpensive(characterValue);

									return (
										<div
											key={index}
											className={`relative flex justify-between items-center gap-1 p-3 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out ${
												tooExpensive ? 'opacity-50 cursor-not-allowed' : ''
											}`}
											style={{ width: '100%', height: '120px' }}
											onClick={() => {
												if (tooExpensive) {
													alert('Not enough DP to add this character!');
												} else {
													onSelectCharacter(character);
												}
											}}>
											{/* If too expensive, add a big X overlay */}
											{tooExpensive && (
												<div className='absolute inset-0 z-10 flex items-center justify-center bg-transparent'></div>
											)}

											{/* Name and DP */}
											<li className='flex-1 text-lg font-medium text-gray-200'>
												{character.name}
												<br />
												<span className='text-gray-400'>DP:</span>{' '}
												<span className='font-semibold'>
													{characterValue.toString()}
												</span>
											</li>

											{/* Profile Image */}
											<div className='relative w-28 h-28'>
												<img
													src={character.img}
													alt={character.name}
													width={110}
													height={110}
													className={`hexagon shadow object-cover ${
														tooExpensive ? 'grayscale' : ''
													}`}
												/>
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
			)}
		</div>
	);
};

export default SearchBar;
