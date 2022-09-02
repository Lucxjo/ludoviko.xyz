import { describe, test, expect } from "vitest";
import { Users } from "../src/users";

describe("users", () => {
	test("is a Users instance", () => {
		const users = new Users();
		expect(users).toBeInstanceOf(Users);
	});
});
