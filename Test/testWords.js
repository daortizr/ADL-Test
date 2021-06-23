const testWords = (body) => {
    let firstArray = Array.from(body.first)
    let secondArray = Array.from(body.second)
    if (firstArray.length !== secondArray.length) return { result: false }
    let firstObj = getLettersObject(firstArray)
    let secondObj = getLettersObject(secondArray)
    let res = true
    Object.keys(firstObj).forEach(key => {
        // if ((body.first === 'lucia' || body.second === 'lucia') && (body.first === 'licua' || body.second === 'licua')) console.log(key, firstObj[key], secondObj[key])
        if (firstObj[key] !== secondObj[key]) res = false
    });
    return { result: res, obj: firstObj }
}

const testWords2 = (body) => {
    let res = false
    let oneAndTwo = testWords({ first: body.first, second: body.second })
    let twoAndThree = testWords({ first: body.second, second: body.third })
    let oneAndThree = testWords({ first: body.first, second: body.third })
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

module.exports.testWords = testWords;
module.exports.testWords2 = testWords2;