const path = require("path")
const calls = require ('../controllers/calls')


// const users = require("./../controllers/users.js")

module.exports = (app) => {
    app.get('/getcalls', (req, res) => {
        console.log('getUsersRoute hit!')
        calls.call_test(req, res)
    })

	app.get("*", (req, res) => {
// 		res.sendfile(path.resolve("./client/dist/index.html"))
        res.redirect("https://www.google.com/")
    })
    

}