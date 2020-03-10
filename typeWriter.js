const sentence = "eh elkalam?";
let timer = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50;
}

setTimeout(() => {
  console.log("\n");
}, 50 * sentence.length);





