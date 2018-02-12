const path = require("path")
const calls = require ('../controllers/calls')
const stakeholders = require ('../controllers/stakeholders')
const patients = require ('../controllers/patients')

// const users = require("./../controllers/users.js")

module.exports = (app) => {
    app.get('/getcalls', (req, res) => {
        console.log('getUsersRoute hit!')
        calls.call_test(req, res)
    })
    
    app.post('/register', (req, res) => {
        console.log('register hit!')
        stakeholders.register(req,res)
    })
    
    app.post('/login', (req, res) => {
        console.log('login hit!')
        stakeholders.login(req,res)
    })
    
    app.post('/add/patient', (req,res) => {
        patients.createPatient(req,res)
    })


	app.get("*", (req, res) => {
		res.sendfile(path.resolve("./client/dist/index.html"))
        // res.redirect("https://www.google.com/")
    })
    

}