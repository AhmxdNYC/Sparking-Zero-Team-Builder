// api/share.js

export default async function handler(req, res) {
	const { team, teamImage } = req.query;

	// Use team and teamImage parameters to dynamically set the Open Graph tags
	const teamNames = team ? team.split(',') : [];
	const imageUrl = teamImage || 'default-image-url';

	res.setHeader('Content-Type', 'text/html');
	res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta property="og:title" content="Check Out My Team!" />
          <meta property="og:description" content="See my custom team setup!" />
          <meta property="og:image" content="${imageUrl}" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <title>My Team</title>
        </head>
        <body>
          <h1>Team Preview</h1>
          <ul>
            ${teamNames.map((name) => `<li>${name}</li>`).join('')}
          </ul>
        </body>
      </html>
    `);
}
//
