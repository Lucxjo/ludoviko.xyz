import { describe, expect, test } from "vitest";
import { Random } from "../src/random";

describe("test random functions", () => {
	test("test length", () => {
		expect(Random.generateRandomString({})).toHaveLength(8);
		expect(Random.generateRandomString({ length: 10 })).toHaveLength(10);
		expect(Random.generateRandomString({ length: 12 })).toHaveLength(12);
	});
	test("test latin_english_only as true", () => {
		// Do 16 checks to make sure we don't get a false positive
		for (let i = 0; i < 16; i++) {
			const str = Random.generateRandomString({ length: 64, latin_english_only: true });
			expect(str).toMatch(/^[A-Za-z0-9]+$/);
		}
	});
	test("test latin_english_only as false", () => {
		// Do 16 checks to make sure we don't get a false positive
		for (let i = 0; i < 16; i++) {
			const str = Random.generateRandomString({
				length: 64,
				latin_english_only: false,
			});
			expect(str).toMatch(/^[A-Za-z0-9ÄÅÖäåöÑñ]+$/);
		}
	});
});
