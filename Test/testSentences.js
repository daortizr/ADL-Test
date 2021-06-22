const { testWords } = require('./testWords')
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
module.exports.testSentences = testSentences;