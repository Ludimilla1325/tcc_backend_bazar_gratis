import bcrypt from "bcrypt";
export function encryptar(str: string) {
  try {
    bcrypt.getRounds(str);
    return str;
  } catch (error) {
    return bcrypt.hashSync(str, 8);
  }
}
