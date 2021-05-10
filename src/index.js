const inquirer = require("inquirer");

const init = async () => {
  const questions = [
    {
      type: "input",
      message: "What is the length of your password?",
      name: "length",
    },
    {
      type: "confirm",
      message: "Do you want to include lowercase characters?",
      name: "isLowercase",
    },
    {
      type: "confirm",
      message: "Do you want to include uppercase characters?",
      name: "isUppercase",
    },
    {
      type: "confirm",
      message: "Do you want to include number characters?",
      name: "isNumber",
    },
    {
      type: "confirm",
      message: "Do you want to include special characters?",
      name: "isSpecialCharacter",
    },
  ];

  const answers = await inquirer.prompt(questions);

  console.log(answers);
};

init();
