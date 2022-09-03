export class Random {
	static generateRandomString(opts: {
		length?: number;
		latin_english_only?: boolean;
	}): string {
		const chars = opts.latin_english_only
			? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
			: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÄÅÖabcdefghijklmnñopqrstuvwxyzäåö0123456789";
		let str = "";
		for (let i = 0; i < (opts.length ?? 8); i++) {
			str += chars.charAt(Math.floor(Math.random() * chars.length));
		}

		return str;
	}

	static generateRandomNumber(opts: {
		length?: number;
	}): number {
		let str = "";
		for (let i = 0; i < (opts.length ?? 8); i++) {
			str += Math.floor(Math.random() * 10);
		}

		return parseInt(str);
	}

}
