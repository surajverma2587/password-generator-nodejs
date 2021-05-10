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
}

module.exports = Password;
