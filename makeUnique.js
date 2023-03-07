
let wordCheck = () => {
    let newWord = [];
    for (i = 0; i < word.length; i++){
        if (!newWord.includes(word[i])){
            newWord.push(word[i])
        }
    }
    return newWord.join('')
}

let word = "watermeloonbaloon"
console.log(wordCheck(word))