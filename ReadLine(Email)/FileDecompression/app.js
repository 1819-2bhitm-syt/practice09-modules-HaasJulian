const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});


let compressedLines = [];

rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', () => {
    for (line of compressedLines){
console.log(decompress(line));
    }
});

function decompress(line){

    let zeicheneins = line.charAt(0);
    let zeichenziffer = parseInt( line.substring(1, line.length));
    let a="";

    for(let i=0;i <zeichenziffer;i++){
        a = a +zeicheneins;


    }
return a;

}