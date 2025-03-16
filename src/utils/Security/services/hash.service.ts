import { compareSync, hashSync } from "bcrypt";

const hashValue = (data: string): string => {
  return hashSync(data, parseInt(process.env.ROUNDS as string));
};
const compareValues = ({
  encryptedText,
  value,
}: {
  encryptedText: string;
  value: string;
}): boolean => {
  return compareSync(value, encryptedText);
};

export { hashValue, compareValues };
