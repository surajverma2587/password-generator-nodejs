const Password = require("./Password");
describe("Password Class", () => {
  describe("Constructor tests", () => {
    it("should create an instance of a Password object", () => {
      const actual = new Password({
        length: 10,
        isUppercase: true,
        isLowercase: true,
        isNumber: true,
        isSpecialCharacter: true,
      });

      expect(actual).toBeInstanceOf(Password);
    });

    it("should set the data properties in the constructor function", () => {
      const actual = new Password({
        length: 10,
        isUppercase: true,
        isLowercase: true,
        isNumber: true,
        isSpecialCharacter: true,
      });

      expect(actual.length).toEqual(10);
      expect(actual.isUppercase).toEqual(true);
      expect(actual.isLowercase).toEqual(true);
      expect(actual.isNumber).toEqual(true);
      expect(actual.isSpecialCharacter).toEqual(true);
    });
  });

  describe("Method Tests", () => {
    const mockAnswers = {
      length: 10,
      isUppercase: true,
      isLowercase: true,
      isNumber: true,
      isSpecialCharacter: false,
    };
    it("should return a random lowercase character", () => {
      const password = new Password(mockAnswers);
      const actual = password.getRandomLowercaseCharacter();

      expect(actual).toMatch(/[a-z]/g);
    });

    it("should return a random uppercase character", () => {
      const password = new Password(mockAnswers);
      const actual = password.getRandomUppercaseCharacter();

      expect(actual).toMatch(/[A-Z]/g);
    });

    it("should return a random number character", () => {
      const password = new Password(mockAnswers);
      const actual = password.getRandomNumberCharacter();

      expect(actual).toMatch(/[0-9]/g);
    });

    it("should return a random special character", () => {
      const password = new Password(mockAnswers);
      const actual = password.getRandomSpecialCharacter();

      expect(actual).toMatch(/[^A-Za-z0-9]/g);
    });

    it("should return a randomly generated password", () => {
      const password = new Password(mockAnswers);
      const actual = password.generate();

      expect(actual).toMatch(/^[A-Za-z0-9.\s_-]+$/g);
    });
  });
});
