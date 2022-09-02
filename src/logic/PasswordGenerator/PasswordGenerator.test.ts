import {describe, it, expect} from "vitest";
import {PasswordGenerator} from "./PasswordGenerator";

describe("Password Generator", () => {
	it("should return a password with the correct amount of characters", () => {
		//arrange
		const passwordGenerator = new PasswordGenerator();
		const passwordLength = 4;

		//act
		const expected = 4;
		const actual = passwordGenerator.generate();

		//assert
		expect(actual.length).toBe(expected);
	});
});