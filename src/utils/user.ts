import bcrypt from "bcrypt";

export default class UserUtils {
	static async hashPassword(password: string): Promise<string> {
		return await bcrypt.hash(password, 10);
	}

	static async validatePassword(password: string, hash: string): Promise<boolean> {
		return bcrypt.compare(password, hash);
	}
}
