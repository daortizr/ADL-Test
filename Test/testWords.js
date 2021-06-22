const testWords = (body) => {
    let firstArray = Array.from(body.first)
    let secondArray = Array.from(body.second)
    if (firstArray.length !== secondArray.length) return { result: false }
    let firstObj = getLettersObject(firstArray)
    let secondObj = getLettersObject(secondArray)
    let res = true
    Object.keys(firstObj).forEach(key => {
        if (firstObj[key] !== secondObj[key]) res = false
    });
    return { result: res }
}

const getLettersObject = (wordArray) => {
    let newObj = {}
    wordArray.forEach(letter => {
        if (newObj[letter] === undefined) newObj[letter] = 1
        else newObj[letter] = newObj[letter] + 1
    });
    return newObj
}

module.exports.testWords = testWords;