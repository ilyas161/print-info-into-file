const readline = require("readline")
const fs = require("fs")

const inputTextFile = "free_company_dataset.csv";
const inputStream = fs.createReadStream(inputTextFile);
const rl = readline.createInterface({
    input: inputStream,
});

let lineCount = 0;

rl.on("line", (line) => {
    lineCount++;
    console.log(line.split(",")[0]);
}).on("close", function(){
    console.log(lineCount);
})
