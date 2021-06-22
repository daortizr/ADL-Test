const { testSentences2 } = require('../testSentences')

var admin = require("firebase-admin");

var serviceAccount = require('../../functions/credenciales/adltest2-firebase-adminsdk-vaj7x-bb150a5077.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const uploadSentenceInDb = async (sentence, q) => {
    let request, result
    try {
        request = await db.collection('sentences').add({ text: sentence})
        console.log(request.id)
    }
    catch (error){
        console.log(error)
    }
    if (q === 2) {
        let sentences = [sentence]
        console.log(sentences, q)
        let request2
        try {
            request2 = await db.collection('sentences').get()
            request2.forEach(doc => {
                let data = doc.data()
                sentences.push(data.text)
            });
        }
        catch (error) {
            console.log(error)
        }
        result = testSentences2(sentences)
    }
    return q === 2 ? result.count : 'ok'
}

const getSentencesQuantity = async () => {
    let request
    try {
        request = await db.collection('sentences').get()
    }
    catch (error){
        console.log(error)
    }
    return request.size ?? 0
}
module.exports.uploadSentenceInDb = uploadSentenceInDb;
module.exports.getSentencesQuantity = getSentencesQuantity;