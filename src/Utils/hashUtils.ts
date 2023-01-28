import bcrypt from "bcrypt";
export function hash(str: string): string {
  try {
    bcrypt.getRounds(str);
    return str;
  } catch (error) {
    return bcrypt.hashSync(str, 8);
  }
}

export async function compare(pass: string, hash: string): Promise<Boolean> {
  return await bcrypt.compare(pass, hash);
}
