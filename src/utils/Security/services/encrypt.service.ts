import Crypto from "crypto-js";

const encrypt = (plainText: string): Crypto.lib.CipherParams => {
  return Crypto.AES.encrypt(plainText, process.env.CRYPTO_KEY as string);
};

const decrypt = (encryptedText: string): string => {
  return Crypto.AES.decrypt(
    encryptedText,
    process.env.CRYPTO_KEY as string
  ).toString(Crypto.enc.Utf8);
};

export { encrypt, decrypt };
