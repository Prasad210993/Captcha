let show = document.querySelector('.showingText');
let inp = document.querySelector('input');
btn = document.querySelector('.ref');

// console.log(inp);

let letter = [['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],[0,1,2,3,4,5,6,7,8,9]];

let finalResult;

// Generate random letter
function genRandom(arr){
let rText1 = arr[Math.floor(Math.random()*arr.length)];
let rText2 = arr[Math.floor(Math.random()*arr.length)];
let towText = rText1+rText2;
return towText;
}

//adding all combination of sub array
let result = "";
for (let i =0;i<letter.length;i++){
    result += (genRandom(letter[i]));
}

//shuffling the result
function shuffle(ar){
    let ar1 = ar.split('');
    for (let i = ar1.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [ar1[i],ar1[j]]=[ar1[j],ar1[i]];
    }
    return ar1.join('');
}


//show text
finalResult = shuffle(result)
console.log(finalResult);
show.innerText = finalResult;

//if click on refresh text should be shuffle/change
const refresh=()=>{
        inp.value='';
        result = ''
        for (let i =0;i<letter.length;i++){
            result += (genRandom(letter[i]));
        }
        finalResult = shuffle(result)
        show.innerText = finalResult;
}

// check input and showing text is correct or not
const check =() =>{
    let m = inp.value.trim();
    let word = m === '' ? 0 : m;
    if(finalResult===word){
        alert("Correct..!");
        refresh();
    }
    else{
        alert("Please Try Again..!");
        refresh();
    }
    console.log(word);
}

console.log()