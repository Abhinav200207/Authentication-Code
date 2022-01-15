var app = require('./App')
var connectDatabase = require("./db/database.js")


connectDatabase()


app.listen(3000, () => {
    console.log(`Server is listening on port ${3000}`)
})