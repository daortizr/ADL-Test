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

const testWords2 = (body) => {
    let firstArray = Array.from(body.first)
    let secondArray = Array.from(body.second)
    let thirdArray = Array.from(body.third)
    if (firstArray.length !== secondArray.length || firstArray.length !== thirdArray.length ) return { result: false }
    let firstObj = getLettersObject(firstArray)
    let secondObj = getLettersObject(secondArray)
    let thirdObj = getLettersObject(thirdArray)
    let res = true
    Object.keys(firstObj).forEach(key => {
        if (firstObj[key] !== secondObj[key] || firstObj[key] !== thirdObj[key]) res = false
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
module.exports.testWords2 = testWords2;