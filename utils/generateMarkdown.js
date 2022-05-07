function generateMarkdown(userResponses) {

  let draftMarkdown = 
  `# ${userResponses.title} 
  
  
  ## Description 
  
  
  ${userResponses.description}
  `

  // Create installation section
  if (userResponses.install !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  
  ${userResponses.install}`
  };

  // Create usage section
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
   
  ${userResponses.usage}`
  };
  
  // Create contribution section
  if (userResponses.contribution !== '') {
  `
  
  ## Contributing
  
  
  ${userResponses.contribution}`
  };

  // Create tests section
  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  
  ${userResponses.tests}`
  };

  // Connect userResponses to license section
  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;

  // Questions section

  draftMarkdown +=
  `
  
  ## Questions?

  ### Find me here!
  
  ${userResponses.github}
  ${userResponses.email}
  `;


 
  
  // Return markdown
  return draftMarkdown;
};

// Export markdown module
module.exports = generateMarkdown;