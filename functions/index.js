const { testWords } = require('../Test/testWords')
const { testSentences } = require('../Test/testSentences')
const { uploadSentenceInDb, getSentencesQuantity } = require('../Test/Database/query')

const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.testWords = functions.https.onRequest((request, response) => {
    try {
        let result = testWords(request.body)
        response.status(200).json(result)
    }
    catch(error){
        response.status(500).send('error')
    }
});

exports.testSentenses = functions.https.onRequest((request, response) => {
    try {
        let result = testSentences(request.body)
        response.status(200).json(result)
    }
    catch(error){
        console.log(error)
        response.status(500).send('error')
    }
});

exports.updaloadSentences = functions.https.onRequest(async (request, response) => {
    let sentences, req
    try {
        sentences = await getSentencesQuantity()
    }
    catch (error) {
        response.status(500).send('error')
    }
    if (sentences.size >= 3) response.status(500).send('Se alcanzó el limite de frases')
    else {
        try {
            req = await uploadSentenceInDb(request.body.sentence, sentences)
            response.status(200).json(req)
        }
        catch (error) { }
    }
    
});