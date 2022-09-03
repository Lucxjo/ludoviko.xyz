import { describe, expect, test } from "vitest";
import UserUtils from "../../src/utils/user";
import { Random } from "../../src/utils/random";

const testUser = {
	id: "123",
	username: "test",
	password: Random.generateRandomString({ length: 10 }),
};

let testToken = {
	token: "",
	expiryInDays: 0,
};

describe("test user util functions", () => {
	test("test validate function", async () => {
		for (let i = 0; i < 16; i++) {
			const str = Random.generateRandomString({ length: 16 });
			const hash = await UserUtils.hashPassword(str);
			expect(await UserUtils.validatePassword(str, hash)).toBe(true);
		}

		// @ts-ignore:2554
		await expect(UserUtils.hashPassword()).rejects.toThrow(
			"PASSWORD_LENGTH"
		);

		// @ts-ignore:2554
		await expect(UserUtils.validatePassword()).rejects.toThrow(
			"PASSWORD_LENGTH"
		);

		const hash = await UserUtils.hashPassword("password");
		expect(await UserUtils.hashPassword("password")).toMatch("$2b$10$");
		expect(await UserUtils.validatePassword("password", hash)).toBe(true);
	});
});

if (process.env.LOCAL == "true") {
	describe("test user auth functions", () => {
		test("test createUser function", async () => {
			let user = await UserUtils.createUser(
				testUser.username,
				testUser.password
			);
			expect(user.success).toBe(true);

			user = await UserUtils.createUser(
				testUser.username,
				testUser.password
			);
			expect(user.success).toBe(false);
			expect(user.error).toBe("USER_ALREADY_EXISTS");
		});

		test("test login function", async () => {
			let user = await UserUtils.loginUser(
				testUser.username,
				testUser.password + "1"
			);
			expect(user.success).toBe(false);
			expect(user.error).toBe("INCORRECT_PASSWORD");

			user = await UserUtils.loginUser(
				testUser.username + "1",
				testUser.password
			);
			expect(user.success).toBe(false);
			expect(user.error).toBe("USER_NOT_FOUND");

			user = await UserUtils.loginUser(
				testUser.username,
				testUser.password
			);
			expect(user.success).toBe(true);
		});

		test("test deleteUser function", async () => {
			let user = await UserUtils.deleteUser(
				testUser.username,
				testUser.password + "1"
			);
			expect(user.success).toBe(false);
			expect(user.error).toBe("INCORRECT_PASSWORD");

			user = await UserUtils.deleteUser(
				testUser.username,
				testUser.password
			);
			expect(user.success).toBe(true);

			user = await UserUtils.deleteUser(
				testUser.username,
				testUser.password
			);
			expect(user.success).toBe(false);
			expect(user.error).toBe("USER_NOT_FOUND");
		});
	});

	test("test token generation", async () => {
		testToken = await UserUtils.generateToken({
			id: testUser.id,
			username: testUser.username,
		});
		expect(testToken).toBeDefined();
	});

	test("test token validation", async () => {
		expect(await UserUtils.getUserFromToken(testToken.token)).toStrictEqual(
			{ id: testUser.id, username: testUser.username }
		);
	});
}
