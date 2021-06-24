# ADL-Test

# correr las funciones en localhost

```bash
cd functions && firebase use default && firebase serve
```
# Comparacion de dos palabras

### Deploy

```bash
cd functions && firebase deploy --only functions:testWords
```

### Uso:
POST
url -> https://us-central1-adltest-678ba.cloudfunctions.net/testWords



//Datos de entrada
```javascript
const body = {
    "first": "army",
    "second": "mary"
}
```
# Comparacion de dos frases

### Deploy

```bash
cd functions && firebase deploy --only functions:testSentenses
```

### Uso:
POST
url -> https://us-central1-adltest-678ba.cloudfunctions.net/testSentenses

//Datos de entrada
```javascript
const body = {
    "first": "angela es conservadora",
    "second": "ellos alegan que ella es muy conversadora"
}
```
# Cargue y comparacion de tres frases 

### Deploy

```bash
cd functions && firebase deploy --only functions:updaloadSentences
```

### Uso:
POST
url -> https://us-central1-adltest-678ba.cloudfunctions.net/updaloadSentences

//Datos de entrada
```javascript
const body = {
    "sentence": "el jugo de fresa se licua ironicamente"
}

