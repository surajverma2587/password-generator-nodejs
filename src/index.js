const inquirer = require("inquirer");
const Password = require("./Password");

const init = async () => {
  const questions = [
    {
      type: "number",
      message: "What is the length of your password?",
      name: "length",
      validate: (length) => {
        return (length >= 8 && length <= 128) || "Should be >= 8 and <= 128";
      },
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

  const password = new Password(answers);

  const generatedPassword = password.generate();

  console.log(generatedPassword);
};

init();
