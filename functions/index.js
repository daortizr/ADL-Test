const { testWords } = require('../Test/testWords')
const { testSentences } = require('../Test/testSentences')

const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.testWords = functions.https.onRequest((request, response) => {
    try {
        let result = testWords(request.body)
        response.status(200).json(result)
    }
    catch(error){
        resposnse.status(500).send('error')
    }
});

exports.testSentenses = functions.https.onRequest((request, response) => {
    try {
        let result = testSentences(request.body)
        response.status(200).json(result)
    }
    catch(error){
        resposnse.status(500).send('error')
    }
});
