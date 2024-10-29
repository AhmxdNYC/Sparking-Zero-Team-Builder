import React from 'react';
import { ControlPanelProps } from './types';

const ControlPanel: React.FC<ControlPanelProps> = ({
	onResetTeam,
	onAddCharacter,
}) => {
	return (
		<>
			<button
				onClick={onResetTeam}
				className='mt-6 bg-[rgb(0,0,255)] text-white px-6 py-3 rounded-md shadow hover:shadow-lg transition transform font-open-sans font-bold  hover:scale-105'>
				Reset Team
			</button>
			<button
				onClick={onAddCharacter}
				className='mt-6 bg-[rgb(0,0,255)] text-white px-6 py-3 rounded-md shadow hover:shadow-lg transition transform font-open-sans font-bold  hover:scale-105'>
				Add Character
			</button>
		</>
	);
};

export default ControlPanel;
