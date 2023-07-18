const dict = {
    1: ["c","i","j","o","s","u"],
    2: ["d","l","p","q","t","v","x"],
    3: ["a","b","f","h","k","n","r","y","z"],
    4: ["e","m","w"]
}

const FA = document.getElementById("FA");
const EA = document.getElementById("EA");

function randInt(min,max){
    return Math.floor(Math.random()*(max-min+1) + min);
}

function getLetters(n){
    if(n === 0) return '';

    let thisValue = randInt(1, n > 4 ? 4 : n);

    let letters = dict[thisValue];

    return letters.at(randInt(0, letters.length - 1)).concat(getLetters(n-thisValue));
}


async function handleFA(){
    let t = new Date();
    t.setMilliseconds(t.getMilliseconds()+500);
    while(t > new Date()){
        await new Promise(r => setTimeout(r, 50));
        let i = randInt(1,10);
        let code;
        if(i < 3){
            code = getLetters(i+2);
            code.concat("-");
        }else{
            code = getLetters(i);
        }
        FA.innerHTML = code;
    }
}

async function handleEA(){
    let t = new Date();
    t.setMilliseconds(t.getMilliseconds()+500);
    while(t > new Date()){
        await new Promise(r => setTimeout(r, 50));
        EA.innerHTML = randInt(1,10);
    }
    
}