const getRandomNumOfCharacters = (remainingCharacters: number): number => {
	return Math.min(Math.floor(Math.random() * remainingCharacters) + 1, 5);
};

export default getRandomNumOfCharacters;
