import { CharacterType } from "../characterType/CharacterType";

export class PasswordGenerator {
	length: number;
	characters: string[];

	constructor(
		length: number,
		characters: CharacterType[] = [CharacterType.Lowercase]
	) {
		this.length = length;
		this.characters = characters.join("").split("");
	}

	generate() {
		let password = "";

		for (let i = 0; i < this.length; i++) {
			password += this.getRandomCharacter();
		}

		return password;
	}

	getRandomCharacter() {
		return this.characters[Math.floor(Math.random() * this.characters.length)];
	}
}
