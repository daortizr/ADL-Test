const { testWords, testWords2 } = require('./testWords')
const testSentences = (body) => {
    let firstArray = body.first.split(' ')
    let secondArray = body.second.split(' ')
    let res = true
    let cont = 0
    firstArray.forEach(word => {
        secondArray.forEach(word2 => {
            let result = testWords({ first: word, second: word2 })
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
    firstArray.forEach(word => {
        secondArray.forEach(word2 => {
            thirdArray.forEach(word3=>{
                let result = testWords2({ first: word, second: word2, third: word3 })
                result.result ? cont++ : null
            })
        });
    });
    return { result: cont > 0, count: cont }
}
module.exports.testSentences = testSentences;
module.exports.testSentences2 = testSentences2;