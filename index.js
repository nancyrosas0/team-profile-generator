const { writeFile, copyFile } = require("./utils/generate-site.js");
const inquirer = require("inquirer");
const generatePage = require('./src/page-template');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the Team Manager's name. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Team Manager's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter the employee Id (Required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the employee Id!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter the employee email address. (Required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter employee email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the employee's office number. (Required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter employee's office number!");
          return false;
        }
      },
    },

  ]);
};

const promptProject = (portfolioData) => {
  console.log(`
=================
Add an Engineer or Intern
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "addEngineer",
        message: "Would you like add an Engineer?",
        default: false,
      },
      {
        type: "input",
        name: "name",
        message: "Enter the Engineer\'s name. (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Engineer\'s name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the Engineer\'s employee Id (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the Engineer\'s employee Id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter Engineer\'s email address. (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter Engineer\'s email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "link",
        message: "Enter the Engineer\'s github link. (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("You need to enter the Engineer\'s GitHub link!");
            return false;
          }
        }
      },
      {
        type: "confirm",
        name: "addIntern",
        message: "Would you like to enter add an Intern?",
        default: false,
      },
      {
        type: "input",
        name: "internName",
        message: "Enter the Intern\'s name. (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Intern\'s name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "Enter the Intern\'s employee Id (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the Intern\'s employee Id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter Intern\'s email address. (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter Intern\'s email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter the Intern\'s school. (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the Intern\'s school!");
            return false;
          }
        },
      },
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then((portfolioData) => {
    return generatePage(portfolioData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
