const express = require('express');
const { testWords } = require('./Test/testWords');
const { testSentences } = require('./Test/testSentences');
const app = express();
const port = 6000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/equalWords', async (req, res) => {
    try {
        let result = testWords(req.body)
        res.status(200).json(result)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('error')
    }
})

app.post('/sentences', async (req, res) => {
    try {
        let result = testSentences(req.body)
        res.status(200).json(result)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('error')
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})