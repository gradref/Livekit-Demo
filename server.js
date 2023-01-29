var express = require('express') //import express NodeJS framework module
var app = express() // create an object of the express module
var http = require('http').Server(app) // create a http web server using the http library
var io = require('socket.io')(http) // import socketio communication module
var livekitApi = require('livekit-server-sdk')
var AccessToken = livekitApi.AccessToken
var RoomServiceClient = livekitApi.RoomServiceClient
const apikey = 'APIigTVhfYbLekP'
const apiSecretKey = 'eexVLyl0Ws4x9dpBfiGPORafqJRNouQiyR4y1oD7BwpC'

app.use(
  '/public/TemplateData',
  express.static(__dirname + '/public/TemplateData')
)
app.use('/public/Build', express.static(__dirname + '/public/Build'))
app.use(express.static(__dirname + '/public'))

//open a connection with the specific client
io.on('connection', function (socket) {
 
  socket.on('TOKEN_REQUEST', function (_data) {
    console.log('Token required')
    var data = JSON.parse(_data)
    var at = new AccessToken(apikey, apiSecretKey, {
      identity: data.name
    })
    at.addGrant({ roomJoin: true, room: data.room })
    var token = at.toJwt()
    socket.emit('TOKEN_GENERATED', token)
  })

}) //END_IO.ON

http.listen(process.env.PORT || 3000, function () {
  console.log('listening on *:3000')
})
console.log('------- server is running -------')
