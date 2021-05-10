class Password {
  constructor({
    length,
    isUppercase,
    isLowercase,
    isNumber,
    isSpecialCharacter,
  }) {
    this.length = length;
    this.isUppercase = isUppercase;
    this.isLowercase = isLowercase;
    this.isNumber = isNumber;
    this.isSpecialCharacter = isSpecialCharacter;
  }

  getRandomLowercaseCharacter() {
    const lowercaseCharacters = [..."abcdefghijklmnopqrstuvwxyz"];
    const randomIndex = Math.floor(Math.random() * lowercaseCharacters.length);

    return lowercaseCharacters[randomIndex];
  }

  getRandomUppercaseCharacter() {
    const uppercaseCharacters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const randomIndex = Math.floor(Math.random() * uppercaseCharacters.length);

    return uppercaseCharacters[randomIndex];
  }

  getRandomNumberCharacter() {
    const numberCharacters = [..."0123456789"];
    const randomIndex = Math.floor(Math.random() * numberCharacters.length);

    return numberCharacters[randomIndex];
  }

  getRandomSpecialCharacter() {
    const specialCharacters = [..."!@£$%^&*()-_+="];
    const randomIndex = Math.floor(Math.random() * specialCharacters.length);

    return specialCharacters[randomIndex];
  }

  generate() {
    const randomChoices = [];

    if (this.isUppercase) {
      randomChoices.push(this.getRandomUppercaseCharacter);
    }

    if (this.isLowercase) {
      randomChoices.push(this.getRandomLowercaseCharacter);
    }

    if (this.isNumber) {
      randomChoices.push(this.getRandomNumberCharacter);
    }

    if (this.isSpecialCharacter) {
      randomChoices.push(this.getRandomSpecialCharacter);
    }

    const emptyPasswordArray = Array(this.length).fill("");

    const callback = (each) => {
      const randomIndex = Math.floor(Math.random() * randomChoices.length);
      return randomChoices[randomIndex]();
    };

    return emptyPasswordArray.map(callback).join("");
  }
}

module.exports = Password;
