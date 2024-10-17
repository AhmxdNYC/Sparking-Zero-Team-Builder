import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Use HashRouter instead of BrowserRouter

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HashRouter>
			{' '}
			{/* Replace BrowserRouter with HashRouter */}
			<App />
		</HashRouter>
	</StrictMode>
);
