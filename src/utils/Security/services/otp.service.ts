import randomstring from "randomstring";

const generateCode = ({
  length,
  charset,
}: {
  length: number;
  charset: randomstring.Charset;
}): string => {
  return randomstring.generate({
    length,
    charset,
  });
};
export default generateCode;
