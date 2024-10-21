import React, { useState, useRef } from 'react';
import { Character } from './Tracker';

interface SearchBarProps {
	data: Character[];
	availableDP: number;
	onSelectCharacter: (character: Character) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
	data,
	availableDP,
	onSelectCharacter,
}) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [filterBy, setFilterBy] = useState<string>('name'); // 'name' by default, can switch to 'ability'
	const [visible, setVisible] = useState<boolean>(false); // Control dropdown visibility
	const inputRef = useRef<HTMLInputElement | null>(null);

	// Toggle the visibility of the search bar and dropdown
	const handleAddCharacterClick = () => {
		setVisible((prev) => !prev); // Toggle visibility
		setSearchTerm(''); // Reset the search term when opened
	};

	// Handle clearing the dropdown and search
	const handleExit = () => {
		setVisible(false); // Hide dropdown
		setSearchTerm(''); // Clear search term
		if (inputRef.current) {
			inputRef.current.blur(); // Blur the input if focused
		}
	};

	// Handle selecting a character
	const handleCharacterSelect = (character: Character) => {
		onSelectCharacter(character); // Call the passed-in character selection handler
		handleExit(); // Exit search mode by closing dropdown and clearing input
	};

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
		<div className='w-full'>
			{/* Add Character Button */}
			<button
				onClick={handleAddCharacterClick}
				className=' bg-[rgb(0,0,255)] text-white p-3 rounded-md font-open-sans font-bold shadow hover:shadow-lg transition transform hover:scale-105'>
				Add Character
			</button>

			{/* Conditionally Render Search Bar and Dropdown */}
			{visible && (
				<>
					{/* Search Bar */}
					<div className='z-20 flex items-center justify-center w-full gap-2 mx-auto mt-4'>
						<div
							className={`relative w-[50%] sm:w-[25%] p-1 border border-gray-300 rounded-md`}>
							<input
								type='text'
								ref={inputRef}
								placeholder={`Search by ${filterBy}...`}
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className='w-full p-2 text-white bg-gray-900 focus:outline-none'
							/>
						</div>

						{/* Exit Button */}
						<button
							onClick={handleExit}
							className='px-4 py-2 text-white bg-red-500 rounded-md'>
							Exit
						</button>

						{/* Dropdown to Select Filter Type */}
						<div className='relative'>
							<select
								className='p-2 text-white bg-gray-900 border border-gray-300 rounded-md focus:outline-none'
								onChange={(e) => setFilterBy(e.target.value)} // Update filter type
								value={filterBy}>
								<option value='name'>Search by Name</option>
								<option value='ability'>Search by Ability</option>
							</select>
						</div>
					</div>

					{/* Scrollable Dropdown List */}
					<div className='relative z-20 top-4'>
						<div className='absolute left-0 right-0 w-[85%] mx-auto bg-gray-900 border border-gray-300 rounded-lg shadow-lg overflow-y-auto overflow-x-hidden custom-scrollbar max-h-[27.5rem] sm:max-h-[32.5rem] sm:w-full'>
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
															handleCharacterSelect(character);
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
									<li className='text-center text-gray-500'>
										No results found
									</li>
								)}
							</ul>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default SearchBar;
