export type Ability = {
	name: string;
	value: number | string;
	description: string[];
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
	setvisibleControlPanel: (visible: boolean) => void;
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
	onGenerateLink: () => void;
	availableDP: number;
	setAvailableDP: (dp: number) => void;
	characters: Character[];
	setCurrentTeam: (team: Character[]) => void;
	currentTeam: Character[];
	setTeamCount: (teamCount: number) => void;
	teamCount: number;
	visibleControlPanel: boolean;
	setVisibleControlPanel: (visible: boolean) => void;
}

export interface DropDownListProps {
	data: Character[];
	searchTerm: string;
	filterBy: string;
	availableDP: number;
	onSelectCharacter: (character: Character) => void;
	handleExit: () => void;
}

export interface CharacterURL {
	name: string;
	value: number;
	img: string;
}

export interface UseLoadTeamFromURLProps {
	setCurrentTeam: (team: Character[]) => void;
	setAvailableDP: (dp: number) => void;
	allCharacters: Character[];
}
