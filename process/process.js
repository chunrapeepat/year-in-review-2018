const fs = require("fs")
const path = require("path")

const tokens = fs.readFileSync(path.join(__dirname, "word.data")).toString()
                    .split("\n").map(x => x.split("="))
                    .filter(x => x.length === 2)

const result = []

for (const token of tokens) {
    result.push({
        word: token[0],
        meaning: token[1],
    })
}

fs.writeFileSync(path.join(__dirname, "words.js"), JSON.stringify(result, 2, 2))