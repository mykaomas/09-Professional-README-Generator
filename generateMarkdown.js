function renderLicenseBadge(license) {
  if (license !== 'None') {
      const licenseBadges = {
          'MIT License': '[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
          'Apache License 2.0': '[![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
          'GPL License': '[![GPL License](https://img.shields.io/badge/License-GPL-blue.svg)](https://opensource.org/licenses/GPL-3.0)',
          'BSD License': '[![BSD License](https://img.shields.io/badge/License-BSD-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
      };

      return licenseBadges[license];
  }

  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
      const licenseLinks = {
          'MIT License': '[MIT License](https://opensource.org/licenses/MIT)',
          'Apache License 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
          'GPL License': '[GPL License](https://opensource.org/licenses/GPL-3.0)',
          'BSD License': '[BSD License](https://opensource.org/licenses/BSD-3-Clause)',
      };

      return licenseLinks[license];
  }

  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
      return `## License

This project is licensed under the ${license}. Click [here](${renderLicenseLink(license)}) for more details.

${renderLicenseBadge(license)}
`;
  }

  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
