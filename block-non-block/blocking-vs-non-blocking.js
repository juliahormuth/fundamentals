// Block => sync de síncronos

const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");
const { join } = require("path");

const copyFileBlocking = (source, dest) => {
  console.log("Read Block content");
  const content = readFileSync(source);
  console.log("Write blocking content");
  writeFileSync(dest, content);
};

const sourcePath = join(__dirname, "files", "example.txt");
const destPath = join(__dirname, "files", "example.copy.txt");

copyFileBlocking(sourcePath, destPath);

console.log("Blocked mode conclued");

// non-Block

console.log("#".repeat(20));

const destPathNonBlock = join(
  __dirname,
  "files",
  "example.copy.non-blocking.txt"
);

const copyFileNonBlocking = (source, dest) => {
  console.log("Staaart");
  readFile(source, (_err, data) => {
    writeFile(dest, data, (_err) => {
      console.log("Finisheddddddd!");
    });
  });
};

copyFileNonBlocking(sourcePath, destPathNonBlock);

console.log("Is finished?");

console.log("Continue", 1 + 1, Math.PI * Math.E);
