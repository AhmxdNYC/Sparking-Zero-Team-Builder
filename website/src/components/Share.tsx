'use client';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Character {
	name: string;
	value: number;
	img: string;
}

interface ShareableLinkGeneratorProps {
	currentTeam: Character[]; // The team to be shared
}

// Serialize the team to a URL-friendly string
const serializeTeam = (team: Character[]) => {
	const characterNames = team.map((character) => character.name).join(',');
	return encodeURIComponent(characterNames);
};

const ShareableLinkGenerator: React.FC<ShareableLinkGeneratorProps> = ({
	currentTeam,
}) => {
	const navigate = useNavigate();

	// Generate the shareable link
	const generateShareableLink = () => {
		// Serialize the current team to a string
		const serializedTeam = serializeTeam(currentTeam);

		// Create the full URL with the team in the query parameter
		const shareableLink = `${window.location.origin}/?team=${serializedTeam}`;

		// Update the URL without reloading the page
		navigate(`/?team=${serializedTeam}`, { replace: true });

		// Return the link to be copied
		return shareableLink;
	};

	// Copy the link to the clipboard
	const handleGenerateLink = async () => {
		const link = generateShareableLink();

		try {
			await navigator.clipboard.writeText(link);
			alert('Shareable link copied to clipboard!');
		} catch (err) {
			console.error('Failed to copy the link: ', err);
			alert('Failed to copy the link.');
		}
	};

	return (
		<div className='flex justify-center mt-4'>
			<button
				onClick={handleGenerateLink}
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
				Generate Shareable Link
			</button>
		</div>
	);
};

export default ShareableLinkGenerator;
