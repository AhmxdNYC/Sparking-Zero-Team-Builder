import { Character } from './Tracker';

export interface GameTeamRandomizerProps {
	availableDP: number;
	setAvailableDP: (dp: number) => void;
	characters: Character[];
	setCurrentTeam: (team: Character[]) => void;
	currentTeam: Character[];
	teamCount: number;
	setTeamCount: (teamCount: number) => void;
}
