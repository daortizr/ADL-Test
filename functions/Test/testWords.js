const testWord = (body) => {
    let firstArray = Array.from(body.first)
    let secondArray = Array.from(body.second)
    if (firstArray.length !== secondArray.length) return { result: false }
    let firstObj = getLettersObject(firstArray)
    let secondObj = getLettersObject(secondArray)
    let res = true
    Object.keys(firstObj).forEach(key => {
        if (firstObj[key] !== secondObj[key]) res = false
    });
    return { result: res, obj: firstObj }
}

const testWords2 = (body) => {
    let res = false
    let oneAndTwo = testWord({ first: body.first, second: body.second })
    let twoAndThree = testWord({ first: body.second, second: body.third })
    let oneAndThree = testWord({ first: body.first, second: body.third })
    let returnObj = {}
    if (oneAndTwo.result || twoAndThree.result || oneAndThree.result) res = true
    if (oneAndTwo.result) returnObj = oneAndTwo.obj
    else if (twoAndThree.result) returnObj = twoAndThree.obj
    else if (oneAndThree.result) returnObj = oneAndThree.obj
    return { result: res, obj: returnObj }
}

const getLettersObject = (wordArray) => {
    let newObj = {}
    wordArray.forEach(letter => {
        if (newObj[letter] === undefined) newObj[letter] = 1
        else newObj[letter] = newObj[letter] + 1
    });
    return newObj
}

module.exports.testWord = testWord;
module.exports.testWords2 = testWords2;