import React, { useState, useRef } from 'react';
import { SearchBarProps } from './types';
import DropDownList from './DropDownList.tsx';
// idk
const SearchBar: React.FC<SearchBarProps> = ({
	data,
	availableDP,
	onSelectCharacter,
	visible,
	setVisible,
	setvisibleControlPanel,
}) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [filterBy, setFilterBy] = useState<string>('name'); // 'name' by default, can switch to 'ability'
	const inputRef = useRef<HTMLInputElement | null>(null);

	// Handle clearing the dropdown and search
	const handleExit = () => {
		setVisible(false);
		setSearchTerm('');
		if (inputRef.current) {
			inputRef.current.blur(); // Blur the input if focused
		}
		setvisibleControlPanel(true); // Show the control panel
	};

	return (
		<div className='w-full'>
			{visible && (
				<>
					{/* Search Bar */}
					<div className='relative z-20 flex items-center justify-center w-full gap-2 mx-auto mt-4  sm:bottom-[0.10rem]'>
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

					{/* Dropdown List */}
					<div className='relative max-h-screen '>
						<DropDownList
							data={data}
							searchTerm={searchTerm}
							filterBy={filterBy}
							availableDP={availableDP}
							onSelectCharacter={onSelectCharacter}
							handleExit={handleExit}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default SearchBar;
