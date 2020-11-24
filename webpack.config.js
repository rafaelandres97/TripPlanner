module.exports = {
    mode: "development",
    entry: "./src/index.js", //the starting point of our program
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    }
}
