const distributePointsRandomly = (
	remainingPoints: number,
	numCharacters: number,
	hasOnePointCharacter: boolean,
	MAX_SINGLE_CHARACTER: number,
	MIN_SINGLE_CHARACTER: number
): number[] => {
	const distributedPoints = [];
	let pointsLeft = remainingPoints;

	for (let i = 0; i < numCharacters - 1; i++) {
		let randomPoint;

		if (hasOnePointCharacter) {
			randomPoint = Math.floor(Math.random() * (MAX_SINGLE_CHARACTER - 1)) + 2;
		} else {
			randomPoint =
				Math.random() < 0.01
					? 1
					: Math.floor(Math.random() * (MAX_SINGLE_CHARACTER - 1)) + 2;
		}

		if (randomPoint === 1) {
			hasOnePointCharacter = true;
		}

		distributedPoints.push(randomPoint);
		pointsLeft -= randomPoint;
	}

	let lastCharacterPoints = Math.max(1, pointsLeft);
	if (hasOnePointCharacter && lastCharacterPoints === MIN_SINGLE_CHARACTER) {
		lastCharacterPoints =
			Math.floor(
				Math.random() * (MAX_SINGLE_CHARACTER - MIN_SINGLE_CHARACTER)
			) + 2;
	}

	while (lastCharacterPoints > MAX_SINGLE_CHARACTER) {
		lastCharacterPoints = Math.floor(Math.random() * MAX_SINGLE_CHARACTER) + 2;
	}

	distributedPoints.push(lastCharacterPoints);

	return distributedPoints;
};

export default distributePointsRandomly;
