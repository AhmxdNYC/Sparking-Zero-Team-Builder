import React, { useState, useRef } from 'react';

interface Character {
	name: string;
	value: number;
	img: string;
}

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
	const [visible, setVisible] = useState<boolean>(false); // Control dropdown visibility
	const [focused, setFocused] = useState<boolean>(false); // Control input focus
	const inputRef = useRef<HTMLInputElement | null>(null);

	// Filter the list based on the search term
	const filteredData = data.filter((character) =>
		character.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Check if the character is too expensive
	const isTooExpensive = (characterValue: number) => {
		return Math.abs(characterValue) > availableDP; // Compare DP value
	};

	// Handle clicking the search bar (toggle dropdown but don't focus yet)
	const handleSearchBarClick = () => {
		if (!visible) {
			setVisible(true); // Show dropdown on first click
		} else if (!focused) {
			// Focus input on second click
			if (inputRef.current) {
				inputRef.current.focus();
				setFocused(true);
			}
		}
	};

	// Handle clearing the dropdown and search
	const handleExit = () => {
		setVisible(false); // Hide dropdown
		setFocused(false); // Remove focus
		setSearchTerm(''); // Clear search term
		if (inputRef.current) {
			inputRef.current.blur(); // Blur the input if focused
		}
	};

	// Handle selecting a character
	const handleCharacterSelect = (character: Character) => {
		onSelectCharacter(character); // Call the passed in character selection handler
		handleExit(); // Exit search mode by closing dropdown and clearing input
	};

	return (
		<div className='w-full'>
			{/* Search Bar with Exit Button */}
			<div className='z-20 flex items-center justify-center w-full gap-2 mx-auto top-15'>
				<div
					className='relative w-[50%] sm:w-[25%] p-2 border border-gray-300 rounded-md cursor-pointer'
					onClick={handleSearchBarClick}>
					<input
						type='text'
						ref={inputRef}
						placeholder='Search...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className={`w-full text-white bg-gray-900 focus:outline-none ${
							focused ? '' : 'cursor-pointer'
						}`} // Make input non-editable until focused
						readOnly={!focused} // Disable typing until focused
					/>
				</div>

				{/* Exit Button */}
				{visible && (
					<button
						onClick={handleExit}
						className='px-4 py-2 text-white bg-red-500 rounded-md'>
						Exit
					</button>
				)}
			</div>

			{/* Scrollable dropdown list */}
			{visible && (
				<div className='relative z-20 top-4'>
					<div className='absolute left-0 right-0 w-[100%] mx-auto bg-gray-900 border border-gray-300 rounded-lg shadow-lg overflow-y-auto overflow-x-hidden custom-scrollbar max-h-[28rem] sm:max-h-[32.5rem] '>
						<ul className='grid grid-cols-1 gap-2 p-2 list-none sm:grid-cols-4'>
							{filteredData.length > 0 ? (
								filteredData.map((character, index) => {
									const characterValue = Math.abs(character.value);
									const tooExpensive = isTooExpensive(characterValue);

									return (
										<div
											key={index}
											className='relative'
											style={{ width: '100%', height: '120px' }}>
											{/* Background Shape */}
											<div className='absolute inset-0 z-0 Char-Card-Background'></div>

											{/* Card Content */}
											<div
												className={` w-full h-[120px] relative flex justify-between items-center gap-1 p-3 bg-transparent rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out ${
													tooExpensive ? 'opacity-50 cursor-not-allowed' : ''
												}`}
												// style={{ width: '100%', height: '120px' }}
												onClick={() => {
													if (tooExpensive) {
														alert('Not enough DP to add this character!');
													} else {
														handleCharacterSelect(character); // Select the character and exit dropdown
													}
												}}>
												{/* Name and DP */}
												<li className='z-10 flex-1 text-lg font-medium text-gray-200'>
													{character.name}
													<br />
													<span className='text-gray-400'>DP:</span>{' '}
													<span className='font-semibold'>
														{characterValue.toString()}
													</span>
												</li>

												{/* Profile Image */}
												<div className='relative z-10 w-28 h-28'>
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
