import { describe, expect, test } from "vitest";
import UserUtils from "../../src/utils/user";
import { Random } from "../../src/utils/random";

describe("test user util functions", () => {
	test("test validate function", async () => {
		for (let i = 0; i < 16; i++) {
			const str = Random.generateRandomString({ length: 16 });
			const hash = await UserUtils.hashPassword(str);
			expect(await UserUtils.validatePassword(str, hash)).toBe(true);
		}
	});
});
