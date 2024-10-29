import characters from '../src/components/Char List';
  
  // Function to find character details by name
  function findCharacterImage(characterName) {
    const character = characters.find((char) => char.name === characterName);
    return character ? character.img : null; // Return null if character not found
  }
  
  export default async function handler(req, res) {
    const { team } = req.query;
    const teamNames = team ? team.split(",") : [];
    
    // Get the image URLs for each character in the team
    const teamImages = teamNames.map(findCharacterImage);
    
    // Check for any missing images
    const validImages = teamImages.filter(Boolean);
    const teamDescription = teamNames.join(", ");
  
    res.setHeader('Content-Type', 'text/html');
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Check Out My Team!</title>
          <meta property="og:title" content="Check Out My Team!" />
          <meta property="og:description" content="See my custom team setup: ${teamDescription}" />
          <!-- Add a default image or a composite image if you want -->
          <meta property="og:image" content="${validImages[0] || 'default-image-url'}" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </head>
        <body>
          <h1>Team Preview</h1>
          <ul>
            ${teamNames.map(name => `<li>${name}</li>`).join('')}
          </ul>
          <div>
            ${validImages.map(imgUrl => `<img src="${imgUrl}" alt="Character Image" width="100">`).join('')}
          </div>
        </body>
      </html>
    `);
  }
  