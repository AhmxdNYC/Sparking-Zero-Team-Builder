export type Ability = {
	name: string;
	value: number | string; // in case it's '?'
	description: string[]; // array of description strings
};

export type Character = {
	name: string;
	value: number;
	img: string;
	abilities: Ability[];
};

export interface GameTeamRandomizerProps {
	availableDP: number;
	setAvailableDP: (dp: number) => void;
	characters: Character[];
	setCurrentTeam: (team: Character[]) => void;
	currentTeam: Character[];
	teamCount: number;
	setTeamCount: (teamCount: number) => void;
}

export interface SearchBarProps {
	data: Character[];
	availableDP: number;
	onSelectCharacter: (character: Character) => void;
	setVisible: (visible: boolean) => void;
	visible: boolean;
}

export interface TrackerProps {
	availableDP: number;
	currentTeam: Array<Character>;
	resetTeam: () => void;
	removeCharacter: (index: number) => void;
}

export interface ControlPanelProps {
	onResetTeam: () => void;
	onAddCharacter: () => void;
}
