const crypto = require("crypto");
const fs = require("fs");

const decryptFile = (inputFile, outputFile, password) => {
  const key = crypto.createHash("sha256").update(password).digest();

  const fileData = fs.readFileSync(inputFile);
  const iv = fileData.slice(0, 16);
  const data = fileData.slice(16);

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);

  fs.writeFileSync(outputFile, decrypted);
  console.log("Decryption successful. Wrote", decrypted.length, "bytes to", outputFile);
};

decryptFile("character.enc", "character.glb", "MyCharacter12");
