const readline = require('readline');
const fs = require('fs');

// Bindestriche ertsellen
function column(){
    let arr = [];
    for(let i = 0; i < 30; i++) {
        arr[i] = "-";
    }
    console.log(arr.join(""));

}

// Vorname  und Nachname bekommen
function getFirstNameLastName(line){
    let semicolon = "leer";
    let i = 0;
    while(semicolon == "leer"){
        if(line.charAt(i) == ";"){
            semicolon = i;
        }
        i++;
    }

    let firstName = line.substring(0, semicolon);
    let lastName = line.substring(semicolon + 1, line.length);
    return getMailAddress(lastName, firstName);

}

// Umlaut tauchen und kürzen
function getMailAddress(firstName, lastName){
    fistName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();

    let arr = [];
    for(let i = 0; i < lastName.length; i++){
        arr[i] = lastName.charAt(i);

        lastName = lastName.replace("ä", "ae");
        lastName = lastName.replace("ö", "oe");
        lastName = lastName.replace("ü", "ue");
    }

    lastName = arr.join("");
    let mailAdrresse = fistName.charAt(0) + "." + lastName + "@htl-leonding.ac.at";
    return mailAdrresse;
}

column();
console.log("Email Adresses :");
column();

const rl = readline.createInterface({
    input: fs.createReadStream('teachers.csv'),
    crlfDelay: Infinity
});

let compressedLines = [];

rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', () => {
    for (line of compressedLines){
        console.log(getFirstNameLastName(line));
    }
    column();
});

