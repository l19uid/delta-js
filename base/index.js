console.log("HELOOOOOOOOOOO");

let a = 12;
let b = 15;

function factorial(a)
{
    if(a == 0)
        return 1;
    else
        return a * factorial(a-1);
}

function letterCount(word, type)
{
    let count = 0;

    for(let a = 0; a < word.length;a++)
    {
        if(word[a] == type)
            count++;
    }

    return count;
}


console.log(factorial(a));
console.log(letterCount("12E123",2));