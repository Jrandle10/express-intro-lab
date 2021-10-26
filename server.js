// import modules

import express from 'express'
// import the favTeams database.... this is how we will import our seperate js file to the server.js file. Everything runs from server.js
import * as favTeam from './data/fav-team.js'

console.log(favTeam)
// we could also do:
// import { find } from './data/fav-team.js'
// not both though. From my understanding importing using: import * as objectName allows me to access all of the data in that file *ask about in class to clarify

// Create Express app

const app = express()

// Configure the app (app.set)

app.set("view engine", "ejs")

// Mount Middleware (app.use)


// Mount routes

app.get('/', function(req, res) {
  res.send('<h1>hello, Ja</h1>')
})

app.get("/favteams", function(req, res) {
  favTeam.find({}, function(error, favteams) {
    res.render("favteams/index", {
      error: error,
      favteams: favteams
    }), {
      
    }
  })
})



// Tell the app to listen on port 3000

app.listen(3050, function() {
  console.log('listening on port 3050')
})