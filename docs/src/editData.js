import { writeFile, readFile } from 'fs/promises';

// did so far

// wild sense
// solar flare
// False Courage
// Instant Transmission
// Afterimage Strike
// Afterimage
// High-Tension

function logAbilitiesWithQuestionMarkValue(characters) {
	let count = 0;

	characters.forEach((character) => {
		character.abilities.forEach((ability) => {
			if (ability.value === '?') {
				console.log(`Character: ${character.name}, Ability: ${ability.name}`);
				count++;
			}
		});
	});

	// Log the total number of abilities with `?` as their value
	console.log(`Total abilities with '?' as their value: ${count}`);
}

const CharacterManager = {
	fileName: 'updated_characters.json', // The common JSON file for saving

	// Convert all character categories to arrays
	convertCategoriesToArray(characters) {
		characters.forEach((character) => {
			if (!Array.isArray(character.category)) {
				character.category = [character.category]; // Wrap in an array if not already
			}
		});
	},

	// Update ability for all characters based on ability name and optionally a category
	async updateAbilityForAllCharacters(
		characters,
		abilityName,
		newAbility,
		category = null
	) {
		characters.forEach((character) => {
			if (!category || character.category.includes(category)) {
				character.abilities.forEach((ability) => {
					if (ability.name === abilityName) {
						console.log(`Updating ability for character: ${character.name}`);
						console.log(
							`Before: ${ability.name}, Description: ${ability.description}`
						);
						// Update the ability
						ability.name = newAbility.name || ability.name;
						ability.value =
							newAbility.value !== undefined ? newAbility.value : ability.value;
						ability.description = newAbility.description || ability.description;

						console.log(
							`After: ${ability.name}, Description: ${ability.description}`
						);
					}
				});
			}
		});

		// Save the updated characters to a file
		await this.saveUpdatedCharactersToFile(characters);
	},

	async updateDescriptionArray(
		characters,
		oldDescriptionArray,
		newDescriptionArray
	) {
		characters.forEach((character) => {
			character.abilities.forEach((ability) => {
				// Check if the entire description array matches the old description array
				if (
					JSON.stringify(ability.description) ===
					JSON.stringify(oldDescriptionArray)
				) {
					// Replace the old description array with the new one
					ability.description = newDescriptionArray;
				}
			});
		});
		// Save the updated characters to a file
		await this.saveUpdatedCharactersToFile(characters);
	},

	// Function to update the category of multiple characters based on any part of the name
	async updateCategoryForCharacters(characters, keywords, newCategory) {
		// Normalize the keywords for case-insensitive comparison
		const normalizedKeywords = Array.isArray(keywords)
			? keywords.map((keyword) => keyword.toLowerCase())
			: [keywords.toLowerCase()]; // Support both single keyword and array

		characters.forEach((character) => {
			const characterName = character.name.toLowerCase();

			// Check if character name includes any of the keywords
			if (
				normalizedKeywords.some((keyword) => characterName.includes(keyword))
			) {
				// Check if the first index of the category array is empty
				if (!character.category[0]) {
					character.category[0] = newCategory; // Update first index if it's empty
				} else {
					// If the first index is not empty, push the new category to the array
					character.category = Array.isArray(character.category)
						? [...new Set([...character.category, newCategory])] // Avoid duplicate categories
						: [newCategory];
				}

				console.log(`Updated ${character.name} to category: ${newCategory}`);
			}
		});
		// Save the updated characters to a file
		await this.saveUpdatedCharactersToFile(characters);
	},

	// Function to delete all categories for each character
	async deleteCategoriesForCharacters(characters, prefixes = null) {
		characters.forEach((character) => {
			if (prefixes) {
				// Normalize prefixes for comparison
				const normalizedPrefixes = Array.isArray(prefixes)
					? prefixes.map((prefix) => prefix.toLowerCase())
					: [prefixes.toLowerCase()];

				// Check if the character's name starts with any of the prefixes
				const characterName = character.name.toLowerCase();
				if (
					normalizedPrefixes.some((prefix) => characterName.startsWith(prefix))
				) {
					character.category = []; // Clear the categories for matching characters
					console.log(`Deleted categories for ${character.name}`);
				}
			} else {
				// Clear the categories for all characters if no prefixes are provided
				character.category = [];
				console.log(`Deleted categories for ${character.name}`);
			}
		});
		// Save the updated characters to a file
		await this.saveUpdatedCharactersToFile(characters);
	},

	// Function to replace words in ability descriptions
	async replaceWordsInDescriptions(characters) {
		const replacements = {
			attack: 'ATK',
			attacks: 'ATKS',
			defense: 'DEF',
			armor: 'ARMOR',
			speed: 'SPEED',
			resistence: 'RES',
		};

		// Regular expression to match any of the words to replace (case-insensitive)
		const pattern = /\b(attack|attacks|defense|armor|speed)\b/gi;

		characters.forEach((character) => {
			character.abilities.forEach((ability) => {
				ability.description = ability.description.map((desc) => {
					// Replace the matched words with their corresponding uppercase abbreviations
					return desc.replace(
						pattern,
						(match) => replacements[match.toLowerCase()]
					);
				});
			});
		});

		// Save the updated characters to a file (assuming saveUpdatedCharactersToFile exists)
		await this.saveUpdatedCharactersToFile(characters);
	},

	async removePeriodsFromDescriptions(characters) {
		characters.forEach((character) => {
			character.abilities.forEach((ability) => {
				ability.description = ability.description.map((desc) => {
					// Remove all periods from the description
					return desc.replace(/\./g, '');
				});
			});
		});

		// Save the updated characters to a file (assuming saveUpdatedCharactersToFile exists)
		await this.saveUpdatedCharactersToFile(characters);
	},

	async replaceSparkingMode(characters) {
		characters.forEach((character) => {
			character.abilities.forEach((ability) => {
				ability.description = ability.description.map((desc) => {
					// Replace 'Enter Sparking Mode' with 'Instant Sparking Mode'
					return desc.replace(/Enter Sparking Mode/g, 'Instant Sparking Mode');
				});
			});
		});
		// Save the updated characters to a file
		await this.saveUpdatedCharactersToFile(characters);
	},

	async replaceSecPeriod(characters) {
		characters.forEach((character) => {
			character.abilities.forEach((ability) => {
				ability.description = ability.description.map((desc) => {
					// Replace 'for (number) sec.' with '(number s).' and 'for (number) sec' with '(number s)'
					return desc.replace(/for (\d+) sec(\.)?/g, (match, p1, p2) => {
						return p2 ? `(${p1}s).` : `(${p1}s)`; // Add period only if it was present
					});
				});
			});
		});

		// Save the updated characters to a file
		await this.saveUpdatedCharactersToFile(characters);
	},

	// Save updated data to a JSON file
	async saveUpdatedCharactersToFile(characters) {
		const jsonData = JSON.stringify(characters, null, 2); // Pretty print with 2-space indentation

		try {
			await writeFile(this.fileName, jsonData, 'utf8');
			console.log(`Updated data saved to ${this.fileName}`);
		} catch (error) {
			console.error('Error writing to file:', error);
		}
	},

	// Log the most common abilities across characters
	logMostCommonAbilities(characters) {
		const abilityCounts = {};

		characters.forEach((character) => {
			character.abilities.forEach((ability) => {
				abilityCounts[ability.name] = (abilityCounts[ability.name] || 0) + 1;
			});
		});

		const sortedAbilities = Object.entries(abilityCounts).sort(
			(a, b) => b[1] - a[1]
		);

		console.log('Ability Name | Occurrences');
		console.log('-------------------------');
		sortedAbilities.forEach(([abilityName, count]) => {
			console.log(`${abilityName} | ${count}`);
		});
	},

	// Add a new character to the list and save
	async addNewCharacter(characters, newCharacter) {
		characters.push(newCharacter);
		console.log(`Added new character: ${newCharacter.name}`);

		// Save the updated characters to a file
		await this.saveUpdatedCharactersToFile(characters);
	},

	// Main function to process and save data
	async processAndSaveUpdatedData(characters) {
		// Replace words in ability descriptions
		await this.replaceWordsInDescriptions(characters);

		// Save updated data to file
		await this.saveUpdatedCharactersToFile(characters);
	},

	// Load the current character data from the JSON file
	async loadCharactersFromFile() {
		try {
			const data = await readFile(this.fileName, 'utf8');
			return JSON.parse(data);
		} catch (error) {
			console.error('Error reading the file:', error);
			return []; // Return an empty array if the file doesn't exist or cannot be read
		}
	},
};

(async function () {
	// Load the existing characters data from the JSON file
	const characters = await CharacterManager.loadCharactersFromFile();

	// CharacterManager.replaceSecPeriod(characters);
	// CharacterManager.replaceSparkingMode(characters);

	// CharacterManager.logMostCommonAbilities(characters);
	// CharacterManager.removePeriodsFromDescriptions(characters);
	// logAbilitiesWithQuestionMarkValue(characters);
	// CharacterManager.updateDescriptionArray(
	// 	characters,
	// 	[
	// 		'Melee ATK power and Ki Blast ATK power greatly increase (15s) Move SPEED greatly decreases',
	// 	],
	// 	['++Melee ATK', '++Ki Blast ATK', '--Move SPEED', '(15s)']
	// );

	CharacterManager.updateDescriptionArray(
		characters,
		['Melee, Ki blast power buff and Ki recovery SPEED increase (15s)'],
		['+Melee ATK', '+Ki blast ATK', '+Ki Recovery SPEED', '(15s)']
	);

	// CharacterManager.updateDescriptionArray(
	// 	characters,
	// 	[
	// 		'Instant Sparking Mode; melee ATK power, Ki Blast ATK power, Blast power, DEF, and move SPEED increase (15s)',
	// 	],
	// 	[
	// 		'Instant Sparking Mode',
	// 		'+Melee ATK',
	// 		'+Ki Blast ATK',
	// 		'+Blast ATK',
	// 		'+DEF',
	// 		'+Move SPEED',
	// 		'(15s)',
	// 	]
	// );
	// ----
	// CharacterManager.updateDescriptionArray(
	// 	characters,
	// 	['Melee ATK power, Ki blast ATK power, and Blast power increase (15s)'],
	// 	['+Melee ATK', '+Ki Blast ATK', '+Blast ATK', '(15s)']
	// );

	// CharacterManager.updateDescriptionArray(
	// 	characters,
	// 	['Instant Sparking Mode,melee and Ki Blast power increase (15s)'],
	// 	['Instant Sparking Mode', '+Melee ATK', '+Ki Blast ATK', '(15s)']
	// );

	// CharacterManager.updateDescriptionArray(
	// 	characters,
	// 	[
	// 		'Melee ATK power, Ki blast ATK power, Smash ATK charge SPEED and Smash Ki Blast charging SPEED increase (15s)',
	// 	],
	// 	[
	// 		'+Melee ATK',
	// 		'+Ki Blast ATK',
	// 		'+Smash ATK charge SPEED',
	// 		'+Smash Ki Blast charging SPEED',
	// 		'(15s)',
	// 	]
	// );
	// ---
	// CharacterManager.updateDescriptionArray(
	// 	characters,
	// 	[
	// 		'Instant Sparking Mode; melee ATK power and Ki Blast ATK power increase, and DEF decreases slightly (15s)',
	// 	],
	// 	['Instant Sparking Mode', '+Melee ATK', '+Ki Blast ATK', '-DEF', '(15s)']
	// );
	// CharacterManager.updateDescriptionArray(
	// 	characters,
	// 	[
	// 		'Instant Sparking Mode; melee ATK power, Ki blast ATK power, and DEF greatly increase (15s)',
	// 	],
	// 	['Instant Sparking Mode', '+Melee ATK', '+Ki Blast ATK', '++DEF', '(15s)']
	// );

	// CharacterManager.updateDescriptionArray(
	// 	characters,
	// 	[
	// 		'Melee ATK power and Ki blast ATK power increase (15s) Blast power greatly increases',
	// 	],
	// 	['+Melee ATK', '+Ki Blast ATK', '++Blast ATK', '(15s)']
	// );
	// -----
	// CharacterManager.updateDescriptionArray(
	// 	characters,
	// 	['Melee, Ki blast, blast power, and combo damage increase (15s)'],
	// 	['+Melee ATK', '+Ki Blast ATK', '+Blast ATK', '+Combo DMG', '(15s)']
	// );

	// CharacterManager.updateDescriptionArray(
	// 	characters,
	// 	[
	// 		'Inflict dmg on self; melee ATK power, Ki Blast ATK power, and Blast power increase (15s)',
	// 	],
	// 	['-HP Self DMG', '+Melee ATK', '+Ki Blast ATK', '+Blast ATK', '(15s)']
	// );

	CharacterManager.updateDescriptionArray(
		characters,
		[
			'Melee ATK power, Ki Blast ATK power, DEF, Blast power, and ki recovery SPEED increase (15s)',
		],
		[
			'+Melee ATK',
			'+Ki Blast ATK',
			'+DEF',
			'+Blast ATK',
			'+Ki Recovery SPEED',
			'(15s)',
		]
	);

	CharacterManager.updateDescriptionArray(
		characters,
		[
			'Instant Sparking Mode; melee ATK power, Ki Blast ATK power, and DEF greatly increase (15s)',
		],
		['Instant Sparking Mode', '++Melee ATK', '++Ki Blast ATK', '++DEF', '(15s)']
	);

	CharacterManager.updateDescriptionArray(
		characters,
		[
			'Melee ATK power and Ki blast ATK power greatly increase (15s) Ki recovers more slowly',
		],
		['++Melee ATK', '++Ki Blast ATK', '-Ki Recovery SPEED', '(15s)']
	);
})();
