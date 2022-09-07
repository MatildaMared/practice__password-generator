import {describe, it, expect} from "vitest";
import {PasswordGenerator} from "./PasswordGenerator";
import {CharacterType} from "../characterType/CharacterType";

describe("Password Generator", () => {
	it("should return a password with the correct amount of characters", () => {
		const passwordLength = 4;

		const passwordGenerator = new PasswordGenerator(passwordLength);

		const expected = 4;
		const actual = passwordGenerator.generate();

		expect(actual.length).toBe(expected);
	});
});