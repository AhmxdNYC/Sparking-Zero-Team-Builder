// Char List.tsx

const fileName = 'updated_characters.json'; // Path to your JSON file in the public directory

const loadCharactersFromFile = async () => {
	try {
		const response = await fetch(fileName);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching the file:', error);
		return []; // Return an empty array if the file doesn't exist or cannot be read
	}
};

export const characters = await loadCharactersFromFile();
