const { testWord, testWords2 } = require('./testWords')
const testSentences = (body) => {
    let firstArray = body.first.split(' ')
    let secondArray = body.second.split(' ')
    let res = true
    let cont = 0
    firstArray.forEach(word => {
        secondArray.forEach(word2 => {
            let result = testWord({ first: word, second: word2 })
            result.result ? cont++ : null
        });
    });
    return { result: cont>0, count: cont }
}

const testSentences2 = (body) => {
    let firstArray = body[0].split(' ')
    let secondArray = body[1].split(' ')
    let thirdArray = body[2].split(' ')
    let cont = 0
    let acceptedWords = []
    firstArray.forEach(word => {
        secondArray.forEach(word2 => {
            thirdArray.forEach(word3 => {
                let validation = false
                let result = testWords2({ first: word, second: word2, third: word3 })
                validation = validation || result.result
                if (validation) {
                    if (validateWord(result.obj, acceptedWords)) acceptedWords.push(result.obj)
                    cont++
                }
            })
        });
    });
    console.log('acceptedWords', acceptedWords)
    return { result: cont > 0, count: acceptedWords.length }
}

const validateWord = (newWord, wordsArray) => {
    let generalValidation = true
    if (wordsArray.length > 0) {
        wordsArray.forEach((word, index) => {
            let tempValidation = true
            if (Object.keys(word).length === Object.keys(newWord).length) {
                Object.keys(word).forEach(letter => {
                    if (!(word[letter] === newWord[letter])) tempValidation = false
                });
                generalValidation = generalValidation && !tempValidation
            }
        });
        return generalValidation
    }
    else {
        return generalValidation
    }
}
module.exports.testSentences = testSentences;
module.exports.testSentences2 = testSentences2;